import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Terms() {
  useEffect(() => { document.title = 'Terms & Conditions | NuNAI Technologies'; }, []);

  return (
    <>
      <section className="page-banner" aria-labelledby="terms-heading" style={{ paddingBottom: '40px' }}>
        <div className="hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
        <div className="page-banner-inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">Terms &amp; Conditions</span>
          </nav>
          <h1 id="terms-heading">Terms &amp; <span className="gradient-text">Conditions</span></h1>
          <p className="legal-date">Last updated: September 2026</p>
        </div>
      </section>

      <div className="legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the NuNAI Technologies website or engaging our services, you accept and agree to be bound by these Terms and Conditions.</p>

        <h2>2. About NuNAI Technologies</h2>
        <p>NuNAI Technologies is a technology company registered and operating in Nairobi, Kenya, providing services including software development, AI solutions, web development, mobile app development, business automation, and cloud solutions.</p>

        <h2>3. Website Use</h2>
        <p>You may use this website for lawful purposes only. You agree not to attempt to gain unauthorised access to any portion of the website, use automated means to scrape content without our permission, or transmit any unlawful or harmful content.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content on this website — including text, graphics, logos, and software — is the property of NuNAI Technologies and is protected by applicable intellectual property laws. You may not reproduce or distribute content without our express written permission.</p>

        <h2>5. Services and Engagements</h2>
        <p>All services are subject to a separate written service agreement. Any quotes or proposals provided through this website are indicative only and do not constitute a binding offer unless confirmed in a formal written agreement.</p>

        <h2>6. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, NuNAI Technologies shall not be liable for any indirect, incidental, or consequential damages arising out of your use of this website or reliance on any information contained herein.</p>

        <h2>7. Privacy</h2>
        <p>Your use of this website is also governed by our <Link to="/privacy">Privacy Policy</Link>, which is incorporated by reference.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms and Conditions are governed by the laws of Kenya. Disputes shall be subject to the exclusive jurisdiction of the courts of Kenya.</p>

        <h2>9. Changes</h2>
        <p>We reserve the right to modify these Terms at any time. Your continued use of the website after changes constitutes acceptance of the updated terms.</p>

        <h2>10. Contact</h2>
        <p>Questions? Email us at <a href="mailto:info@nunai.co.ke">info@nunai.co.ke</a></p>

        <div style={{ marginTop: '48px', display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '24px', borderTop: '1px solid var(--clr-border)' }}>
          <Button to="/" variant="primary">Back to Home</Button>
          <Button to="/privacy" variant="outline">Privacy Policy</Button>
          <Button to="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </>
  );
}
