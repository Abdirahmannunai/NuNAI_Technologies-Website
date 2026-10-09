import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../data/services';

function ServiceCard({ service, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <article className="service-card" aria-labelledby={`svc-${service.id}`}>
        <div className="service-icon-wrap" aria-hidden="true">
          <service.icon className="service-icon" size={30} strokeWidth={1.8} />
        </div>
        <h3 id={`svc-${service.id}`} className="service-title">{service.title}</h3>
        <p className="service-desc">{service.shortDesc}</p>
        <ul className="service-list" aria-label={`${service.title} features`}>
          {service.features.slice(0, 4).map(f => <li key={f}>{f}</li>)}
        </ul>
        <Link to={`/services#${service.id}`} className="service-link" aria-label={`Learn more about ${service.title}`}>
          Learn More <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </article>
    </ScrollReveal>
  );
}

export default function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="What We Do"
            title={<>Our <span className="gradient-text">Services</span></>}
            subtitle="Comprehensive technology solutions designed to transform your business and accelerate growth."
          />
        </ScrollReveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={`${(i % 3) * 0.1}s`} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Button to="/services" variant="outline" size="lg">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
