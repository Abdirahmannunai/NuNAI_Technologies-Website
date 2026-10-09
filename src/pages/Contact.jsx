import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import ContactSection from '../sections/ContactUsSection';
import FAQSection from '../sections/FAQSection';

export default function ContactUs() {
  useEffect(() => { document.title = 'Contact Us'; }, []);

  return (
    <>
      <section className="page-banner" aria-labelledby="contact-page-heading">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
        </div>
        <div className="page-banner-inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">Contact Us</span>
          </nav>
          <span className="section-label">Get In Touch</span>
          <h1 id="contact-page-heading">
            Let's Build Something{' '}
            <span className="gradient-text">Exceptional Together</span>
          </h1>
          <p>Tell us about your project and we'll get back to you within 24 hours. First consultation is always free.</p>
        </div>
      </section>

      <ContactSection />

      <section className="contact-map-section">
        <div className="container">
          <div className="map-card" aria-label="Map showing NuNAI Technologies location">
            <iframe
              title="NuNAI Technologies location"
              src="https://www.google.com/maps?q=Nextgen%20Mall%2C%20Nairobi%2C%20Kenya&z=16&output=embed&hl=en"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--clr-bg)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <ScrollReveal>

          </ScrollReveal>
        </div>
        <FAQSection />
      </section>
    </>
  );
}
