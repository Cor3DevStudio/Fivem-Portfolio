import { SOCIAL_LINKS } from '@/types';
import { IconGitHub, IconInstagram, IconDiscord } from './icons';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">© 2026 Cor3DevStudio. All rights reserved.</div>
        <div className="footer-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIAL_LINKS[0].ariaLabel}
            href={SOCIAL_LINKS[0].href}
            className="footer-icon"
          >
            <IconGitHub className="footer-svg" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIAL_LINKS[1].ariaLabel}
            href={SOCIAL_LINKS[1].href}
            className="footer-icon"
          >
            <IconInstagram className="footer-svg" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIAL_LINKS[2].ariaLabel}
            href={SOCIAL_LINKS[2].href}
            className="footer-icon"
          >
            <IconDiscord className="footer-svg" />
          </a>
        </div>
      </div>
      <div className="footer-gradient" />
    </footer>
  );
}
