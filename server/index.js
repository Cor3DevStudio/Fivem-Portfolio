import 'dotenv/config';
import express from 'express';

const app = express();
const GITHUB_GRAPHQL = 'https://api.github.com/graphql';
const PORT = Number(process.env.API_PORT) || 3001;

function sendJson(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(status).send(JSON.stringify(body));
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.get('/api/contributions', async (req, res) => {
  try {
    const username = String(req.query.username || 'keeydi').trim() || 'keeydi';
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return sendJson(res, 500, {
        error: 'Server missing GITHUB_TOKEN. Add it to .env in the project root.',
      });
    }

    const to = new Date();
    const from = new Date(to);
    from.setFullYear(from.getFullYear() - 1);

    const query = `query($user: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $user) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }`;

    const variables = {
      user: username,
      from: from.toISOString(),
      to: to.toISOString(),
    };

    const resp = await fetch(GITHUB_GRAPHQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    const text = await resp.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return sendJson(res, 502, {
        error: 'GitHub API returned invalid JSON. Try again later.',
      });
    }

    if (data.errors && data.errors.length) {
      return sendJson(res, 400, {
        error: data.errors[0].message || 'GraphQL error',
      });
    }

    const cal = data.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) {
      return sendJson(res, 404, { error: 'User not found' });
    }

    sendJson(res, 200, cal);
  } catch (err) {
    console.error('Contributions API error:', err);
    sendJson(res, 500, {
      error: err.message || 'Failed to fetch contributions',
    });
  }
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  sendJson(res, 500, { error: 'Server error' });
});

app.listen(PORT, '0.0.0.0', () => {
  const hasToken = Boolean(process.env.GITHUB_TOKEN);
  console.log(`Contributions API: http://localhost:${PORT}/api/contributions`);
  if (!hasToken) console.log('  → Add GITHUB_TOKEN to .env in the project root for live data.');
});
