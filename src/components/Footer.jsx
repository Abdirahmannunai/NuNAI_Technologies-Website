import { Link } from 'react-router-dom';
import { Globe2, Mail, MapPin, Phone } from 'lucide-react';
import { FOOTER_COMPANY, FOOTER_SERVICES } from '../data/navigation';
const SOCIAL = [
  { label: 'LinkedIn', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg> },
  { label: 'Facebook', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
  { label: 'X (Twitter)', href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M2 4h7l13 16h-7L2 4zM2 20 9 12M15 4 9 12" /></svg> },
  { label: 'Instagram', href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> },
  { label: 'GitHub', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo" aria-label="NuNAI Technologies home" style={{ marginBottom: 0 }}>
              <span className="nav-logo-crop" aria-hidden="true">
                <img src="/updated-logo.png" alt="" className="nav-logo-mark" />
              </span>
            </Link>
            <p className="footer-desc">
              Empowering businesses through Artificial Intelligence, Software Development,
              Automation, and Digital Transformation. Proudly based in Nairobi, Kenya.
            </p>
            <div className="footer-social" aria-label="Social media links">
              {SOCIAL.map(({ label, href, svg }) => (
                <a key={label} href={href} className="social-link" aria-label={label} rel="noopener noreferrer" target="_blank">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Company nav */}
          <nav aria-label="Company links">
            <h3 className="footer-nav-heading">Company</h3>
            <ul className="footer-nav-list" role="list">
              {FOOTER_COMPANY.map(l => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Services nav */}
          <nav aria-label="Services links">
            <h3 className="footer-nav-heading">Services</h3>
            <ul className="footer-nav-list" role="list">
              {FOOTER_SERVICES.map(l => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-contact">
            <h3 className="footer-nav-heading">Contact</h3>
            <address className="footer-contact-list">
              <p><MapPin size={18} aria-hidden="true" /><span>Nextgen Mall, Nairobi, Kenya</span></p>
              <p><Phone size={18} aria-hidden="true" /><a href="tel:+254799554498">+254 799 554 498</a></p>
              <p><Mail size={18} aria-hidden="true" /><a href="mailto:info@nunaitech.co.ke">info@nunaitech.co.ke</a></p>
              <p><Globe2 size={18} aria-hidden="true" /><a href="https://www.nunaitech.co.ke" target="_blank" rel="noopener noreferrer">www.nunaitech.co.ke</a></p>
            </address>
              
            <div style={{ marginTop: '20px' }}>
              <h3 className="footer-nav-heading">Legal</h3>
              <ul className="footer-nav-list" role="list">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 NuNAI Technologies. All Rights Reserved.</p>
          <p className="footer-tagline">"Intelligence. Innovation. Impact."</p>
        </div>
      </div>
    </footer>
  );
}
