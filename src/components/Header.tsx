import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '@/types';
import { IconGitHub, IconInstagram, IconDiscord, IconMenu } from './icons';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <Link className="logo" to="/" aria-label="Home">
          Cor3DevStudio
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIAL_LINKS[0].ariaLabel}
            href={SOCIAL_LINKS[0].href}
            className="icon-btn"
          >
            <IconGitHub className="icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIAL_LINKS[1].ariaLabel}
            href={SOCIAL_LINKS[1].href}
            className="icon-btn"
          >
            <IconInstagram className="icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIAL_LINKS[2].ariaLabel}
            href={SOCIAL_LINKS[2].href}
            className="icon-btn"
          >
            <IconDiscord className="icon" />
          </a>
          <button
            type="button"
            className="icon-btn mobile-menu-btn md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IconMenu className="icon-lg" />
          </button>
        </div>
      </nav>
      <div
        className={`mobile-menu md:hidden ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-menu-list">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-gradient" />
    </header>
  );
}
