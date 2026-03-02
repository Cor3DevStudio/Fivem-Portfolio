import { Link } from 'react-router-dom';

export function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="products-header">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">Coming soon – FiveM and web projects</p>
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
