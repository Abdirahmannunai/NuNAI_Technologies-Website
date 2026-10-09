import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Privacy() {
  useEffect(() => { document.title = 'Privacy Policy | NuNAI Technologies'; }, []);

  return (
    <>
      <section className="page-banner" aria-labelledby="privacy-heading" style={{ paddingBottom: '40px' }}>
        <div className="hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
        <div className="page-banner-inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1 id="privacy-heading">Privacy <span className="gradient-text">Policy</span></h1>
          <p className="legal-date">Last updated: September 2026</p>
        </div>
      </section>

      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>NuNAI Technologies ("we", "us", "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect information you provide directly to us, including when you complete a contact form, request a quote, subscribe to our newsletter, or engage our services. This may include your name, email, phone number, company name, and project description.</p>
        <p>We also automatically collect certain technical information including IP address, browser type, pages visited, and time on page to improve our service.</p>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>Respond to your enquiries and provide services you request</li>
          <li>Send newsletter communications (only with opt-in consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organisational measures including HTTPS encryption, access controls, and regular security reviews to protect your personal information.</p>

        <h2>5. Your Rights</h2>
        <p>You may have the right to access, correct, erase, or restrict processing of your personal data. To exercise these rights, contact us at <a href="mailto:info@nunai.co.ke">info@nunai.co.ke</a>.</p>

        <h2>6. Cookies</h2>
        <p>Our website may use cookies to enhance your browsing experience and analyse traffic. You can control cookies through your browser settings.</p>

        <h2>7. Changes</h2>
        <p>We may update this Privacy Policy periodically. We encourage you to review it from time to time.</p>

        <h2>8. Contact</h2>
        <p>Questions? Email us at <a href="mailto:info@nunai.co.ke">info@nunai.co.ke</a> or visit <a href="https://www.nunai.co.ke" target="_blank" rel="noopener noreferrer">www.nunai.co.ke</a>.</p>

        <div style={{ marginTop: '48px', display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '24px', borderTop: '1px solid var(--clr-border)' }}>
          <Button to="/" variant="primary">Back to Home</Button>
          <Button to="/terms" variant="outline">Terms &amp; Conditions</Button>
          <Button to="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </>
  );
}
