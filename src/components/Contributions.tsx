import { useEffect, useState, useMemo } from 'react';
import { SOCIAL_LINKS, GITHUB_USERNAME } from '@/types';
import { IconGitHub } from './icons';

const GITHUB_CHART_URL = `https://ghchart.rshah.org/${GITHUB_USERNAME}`;

const MONTH_SHORT: Record<number, string> = {
  0: 'JAN', 1: 'FEB', 2: 'MAR', 3: 'APR', 4: 'MAY', 5: 'JUN',
  6: 'JUL', 7: 'AUG', 8: 'SEP', 9: 'OCT', 10: 'NOV', 11: 'DEC',
};

/** GitHub-style contribution shades: empty, then 4 levels of green (realistic commit graph) */
const CONTRIBUTION_SHADES = [
  'rgba(26, 32, 44, 0.6)', // no contributions – subtle dark cell
  '#0e4429',               // 1–3 commits  – darkest green
  '#006d32',               // 4–9
  '#26a641',               // 10–19
  '#39d353',               // 20+
] as const;

function getContributionLevel(count: number): number {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 9) return 2;
  if (count <= 19) return 3;
  return 4;
}

function getLevelColor(count: number): string {
  return CONTRIBUTION_SHADES[getContributionLevel(count)];
}

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

function buildCalendarGrid(weeks: ContributionWeek[]): (ContributionDay | null)[][] {
  const rows = 7;
  const cols = weeks.length;
  const grid: (ContributionDay | null)[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(null)
  );
  weeks.forEach((week, col) => {
    week.contributionDays.forEach((day) => {
      const dayOfWeek = new Date(day.date + 'T12:00:00').getDay();
      grid[dayOfWeek][col] = day;
    });
  });
  return grid;
}

function getFirstDateInColumn(grid: (ContributionDay | null)[][], col: number): string | null {
  for (let row = 0; row < 7; row++) {
    const cell = grid[row][col];
    if (cell?.date) return cell.date;
  }
  return null;
}

function getMonthLabels(grid: (ContributionDay | null)[][]): { month: string; colIndex: number }[] {
  const cols = grid[0]?.length ?? 0;
  const out: { month: string; colIndex: number }[] = [];
  let lastMonth: string | null = null;
  for (let col = 0; col < cols; col++) {
    const dateStr = getFirstDateInColumn(grid, col);
    if (!dateStr) continue;
    const d = new Date(dateStr + 'T12:00:00');
    const month = MONTH_SHORT[d.getMonth()];
    if (month !== lastMonth) {
      out.push({ month, colIndex: col });
      lastMonth = month;
    }
  }
  return out;
}

function formatCellDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  const month = d.toLocaleString('en-US', { month: 'short' });
  return `${month} ${d.getDate()}, ${d.getFullYear()}`;
}

export function Contributions() {
  const github = SOCIAL_LINKS[0];
  const [data, setData] = useState<ContributionCalendar | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/contributions?username=${encodeURIComponent(GITHUB_USERNAME)}`)
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) return null;
        try {
          return JSON.parse(text) as ContributionCalendar;
        } catch {
          return null;
        }
      })
      .then((cal) => {
        if (!cancelled && cal?.weeks) {
          setData(cal);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const grid = useMemo(() => (data?.weeks ? buildCalendarGrid(data.weeks) : null), [data]);
  const total = data?.totalContributions ?? 0;
  const monthLabels = useMemo(() => (grid ? getMonthLabels(grid) : []), [grid]);

  return (
    <div className="contributions-card contributions-card-ref">
      <div className="contributions-header">
        <div className="contributions-header-text">
          <h2 className="contributions-title">GitHub Contributions</h2>
          <span className="contributions-meta">
            {data ? `${total.toLocaleString()} contributions this year` : `@${GITHUB_USERNAME}`}
          </span>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={github.href}
          className="btn-soft"
        >
          <IconGitHub className="btn-icon" />
          View Profile
        </a>
      </div>
      <div className="contributions-embed">
        {grid ? (
          <div
            className="contributions-calendar"
            role="img"
            aria-label={`GitHub contribution calendar: ${total} contributions this year`}
          >
            <div className="contributions-scroll-wrap">
              <div className="contributions-scroll-inner">
                <div className="contributions-month-row">
                  {monthLabels.map(({ month, colIndex }) => (
                    <span
                      key={`${month}-${colIndex}`}
                      className="contributions-month-label"
                      style={{ '--col-index': colIndex } as React.CSSProperties}
                    >
                      {month}
                    </span>
                  ))}
                </div>
                <div className="contributions-calendar-grid">
                  {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="contributions-calendar-row">
                      {row.map((cell, colIndex) => (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className="contributions-calendar-cell group"
                          style={{
                            backgroundColor: cell
                              ? getLevelColor(cell.contributionCount)
                              : CONTRIBUTION_SHADES[0],
                          }}
                          title={
                            cell
                              ? `${formatCellDate(cell.date)}: ${cell.contributionCount} contributions`
                              : undefined
                          }
                        >
                          {cell && (
                            <div className="contributions-cell-tooltip" aria-hidden>
                              <div>{formatCellDate(cell.date)}</div>
                              <div className="contributions-cell-tooltip-count">
                                {cell.contributionCount} contribution
                                {cell.contributionCount !== 1 ? 's' : ''}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="contributions-scroll-fade contributions-scroll-fade-left" aria-hidden />
              <div className="contributions-scroll-fade contributions-scroll-fade-right" aria-hidden />
            </div>
            <div className="contributions-legend-inline">
              <span>Less</span>
              <div className="contributions-legend-squares">
                {CONTRIBUTION_SHADES.map((color, level) => (
                  <span
                    key={level}
                    className="contributions-legend-sq"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        ) : (
          <img
            src={GITHUB_CHART_URL}
            alt={`GitHub contribution chart for ${GITHUB_USERNAME}`}
            className="contributions-chart"
          />
        )}
      </div>
    </div>
  );
}
