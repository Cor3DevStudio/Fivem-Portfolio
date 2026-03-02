import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '@/types';
import { IconGitHub, IconYouTube, IconArrow, IconInstagramCredit } from './icons';

export function Hero() {
  const github = SOCIAL_LINKS[0];
  const youtube = SOCIAL_LINKS[3];

  return (
    <section className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot" aria-hidden />
            Available for work
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Cor3DevStudio</span>
          </h1>
          <p className="hero-desc">
            A 🇵🇭 Filipino developer studying Information Technology, specializing in full-stack
            development and FiveM systems. I build high-performance applications with clean code
            and exceptional user experiences.
          </p>
          <div className="hero-actions">
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label={github.ariaLabel}
              href={github.href}
              className="social-btn"
            >
              <IconGitHub className="social-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label={youtube.ariaLabel}
              href={youtube.href}
              className="social-btn"
            >
              <IconYouTube className="social-icon" />
            </a>
            <span className="action-divider" />
            <Link to="/store" className="btn-primary">
              View Store <IconArrow className="btn-arrow" />
            </Link>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div className="hero-card-glow" />
          <div className="hero-card">
            <div className="hero-card-inner">
              <img
                src="/main/logo.svg"
                alt="Cor3DevStudio Logo"
                className="hero-logo"
                width={400}
                height={400}
              />
            </div>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rei_nitsu/"
            className="logo-credit"
          >
            <IconInstagramCredit className="credit-icon" />
            <span className="credit-text">
              Logo by <strong>@rei_nitsu</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
