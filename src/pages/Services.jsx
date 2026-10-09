import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../sections/CTABanner';
import { SERVICES } from '../data/services';

function ServiceDetail({ service, reverse }) {
  return (
    <section
      id={service.id}
      className="service-detail"
      aria-labelledby={`svc-detail-${service.id}`}
    >
      <div className="container">
        <div className="service-detail-grid" style={reverse ? { direction: 'rtl' } : {}}>
          <ScrollReveal>
            <div className="service-detail-visual" style={reverse ? { direction: 'ltr' } : {}}>
              <div className="service-detail-icon" aria-hidden="true"><service.icon size={48} strokeWidth={1.6} /></div>
              <h3>{service.title}</h3>
              <p>{service.features[0]}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="0.15s">
            <div style={reverse ? { direction: 'ltr' } : {}}>
              <SectionTitle
                label={`0${SERVICES.indexOf(service) + 1}`}
                title={<>{service.title.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{service.title.split(' ').slice(-1)}</span></>}
                align="left"
              />
              <p className="about-text">{service.description}</p>

              <ul className="feature-check-list" style={{ marginBottom: '24px' }}>
                {service.features.map(f => <li key={f}>{f}</li>)}
              </ul>

              <p className="values-heading" style={{ marginBottom: '10px' }}>Technologies Used</p>
              <div className="values-list" style={{ marginBottom: '28px' }}>
                {service.tech.map(t => <span className="value-tag" key={t}>{t}</span>)}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Button to="/contact" variant="primary">Discuss This Service</Button>
                <Button to="/portfolio" variant="outline">See Related Work</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  useEffect(() => { document.title = 'Services | NuNAI Technologies'; }, []);

  /* Scroll to hash anchor after render */
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }, [hash]);

  return (
    <>
      <section className="page-banner" aria-labelledby="services-page-heading">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
        </div>
        <div className="page-banner-inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">Services</span>
          </nav>
          <span className="section-label">What We Offer</span>
          <h1 id="services-page-heading">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p>Comprehensive technology solutions designed to transform your business and accelerate growth.</p>
        </div>
      </section>

      {/* Quick nav cards */}
      <section style={{ padding: '80px 0', background: 'var(--clr-bg)' }}>
        <div className="container">
          <ScrollReveal>
            <SectionTitle label="Everything You Need" title={<>Technology That <span className="gradient-text">Delivers</span></>} />
          </ScrollReveal>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.id} delay={`${(i % 3) * 0.1}s`}>
                <div className="service-card" style={{ textAlign: 'center' }}>
                  <div className="service-icon-wrap" style={{ margin: '0 auto 18px' }} aria-hidden="true">
                    <s.icon className="service-icon" size={30} strokeWidth={1.8} />
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.shortDesc}</p>
                  <a href={`#${s.id}`} className="service-link">Learn More <ArrowRight size={16} aria-hidden="true" /></a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      {SERVICES.map((s, i) => <ServiceDetail key={s.id} service={s} reverse={i % 2 !== 0} />)}

      <CTABanner
        badge="Let's Get Started"
        heading="Not Sure Which Service You Need?"
        body="Tell us about your challenge and our team will recommend the right solution for your goals and budget."
        primaryLabel="Book a Free Consultation"
        primaryTo="/contact"
        secondaryLabel={null}
      />
    </>
  );
}
