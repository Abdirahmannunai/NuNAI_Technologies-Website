import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../data/navigation';
import Button from './Button';

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [ddOpen,    setDdOpen]    = useState(false);   // mobile dropdown
  const location = useLocation();
  const navRef   = useRef(null);

  /* scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close menu on route change */
  useEffect(() => { setMenuOpen(false); setDdOpen(false); }, [location]);

  /* close on outside click */
  useEffect(() => {
    const handler = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  /* escape key */
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      id="navbar"
      role="banner"
      ref={navRef}
    >
      <nav className="nav-container" aria-label="Main navigation">

        {/* Logo */}
        <Link to="/" className="nav-logo" aria-label="NuNAI Technologies home">
          <span className="nav-logo-crop" aria-hidden="true">
            <img src="/updated-logo.png" alt="" className="nav-logo-mark" />
          </span>
        </Link>

        {/* Desktop links */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links" role="list">
          {NAV_LINKS.map(link =>
            link.children ? (
              <li key={link.label} className={`nav-item-dropdown${ddOpen ? ' open' : ''}`}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link nav-link-dropdown${isActive ? ' active' : ''}`
                  }
                  onClick={e => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setDdOpen(p => !p);
                    }
                  }}
                  aria-expanded={ddOpen}
                >
                  {link.label}
                  <ChevronDown className="nav-arrow" size={14} aria-hidden="true" />
                </NavLink>
                <ul className="dropdown-menu" role="list">
                  {link.children.map(child => {
                    const Icon = child.icon;
                    return (
                      <li key={child.label}>
                        <Link to={child.to} className="dropdown-link">
                          <span className="dropdown-icon" aria-hidden="true"><Icon size={17} strokeWidth={1.9} /></span>
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
          
          {/* Mobile CTA */}
          {/* <li>
            <Button to="/contact" variant="primary" size="sm" className="nav-cta-mobile">
              Get Started
            </Button>
          </li> */}
        </ul>

<div>
            <Button to="/contact" variant="primary" size="sm" className="nav-cta-mobile">
              Get Started
            </Button>
          </div>
        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

      </nav>
    </header>
  );
}
