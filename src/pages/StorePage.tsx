import { Link } from 'react-router-dom';
import { TOP_PRODUCTS } from '@/types';

export function StorePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="products-header">
          <h1 className="section-title">Store</h1>
          <p className="section-subtitle">FiveM scripts and resources</p>
        </div>
        <div className="products-grid">
          {TOP_PRODUCTS.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-body">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <span className="btn-product">View</span>
                </div>
              </div>
            </article>
          ))}
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
