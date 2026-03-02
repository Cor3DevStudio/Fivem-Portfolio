import { Link } from 'react-router-dom';
import { TOP_PRODUCTS } from '@/types';
import { IconArrow } from './icons';

export function Products() {
  return (
    <section className="section section-products">
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">Top Products</h2>
          <p className="section-subtitle">My most popular items from the store</p>
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
                  <Link to="/store" className="btn-product">
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="products-cta">
          <Link to="/store" className="btn-outline">
            View All Products <IconArrow className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
