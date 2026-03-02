import { Link } from 'react-router-dom';

export function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="products-header">
          <h1 className="section-title">Pricing</h1>
          <p className="section-subtitle">Check the store for product pricing</p>
        </div>
        <p className="section-subtitle" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/store" className="btn-outline">
            View Store
          </Link>
          {' · '}
          <Link to="/" className="btn-outline">
            Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
