import { TECH_STACK } from '@/types';
import { getTechIcon } from '@/components/TechIcons';

export function TechStack() {
  return (
    <div className="tech-card tech-card-ref">
      <h2 className="tech-title">Tech Stack</h2>
      <span className="tech-meta">Technologies I work with</span>
      <div className="tech-grid tech-grid--icons">
        {TECH_STACK.map((tech) => {
          const Icon = getTechIcon(tech);
          return (
            <div key={tech} className="tech-item tech-item--icon" title={tech}>
              <span className="tech-tooltip" aria-hidden>{tech}</span>
              <div className="skill-icon-wrap">
                {Icon ? (
                  <Icon className="skill-icon" />
                ) : (
                  <span className="skill-icon skill-icon--text">{tech}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
