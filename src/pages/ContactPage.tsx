import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '@/types';

export function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="products-header">
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">Reach out via email, Discord, GitHub, or Instagram</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-soft">
            {CONTACT_EMAIL}
          </a>
          {SOCIAL_LINKS.slice(0, 3).map((link) => (
            <a
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              className="btn-soft"
            >
              {link.label}
            </a>
          ))}
          <Link to="/" className="btn-outline" style={{ marginTop: '1rem' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
