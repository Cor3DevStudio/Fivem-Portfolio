import { Link } from 'react-router-dom';
import { TECH_STACK } from '@/types';
import { getTechIcon } from '@/components/TechIcons';

export function SkillsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="products-header">
          <h1 className="section-title">Skills</h1>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className="skills-grid">
          {TECH_STACK.map((tech) => {
            const Icon = getTechIcon(tech);
            return (
              <div key={tech} className="skill-item" title={tech}>
                <span className="tech-tooltip" aria-hidden>{tech}</span>
                <div className="skill-icon-wrap">
                  {Icon ? (
                    <Icon className="skill-icon" />
                  ) : (
                    <span className="skill-icon" style={{ fontSize: '0.875rem' }}>{tech}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="section-subtitle" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/" className="btn-outline">
            Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
