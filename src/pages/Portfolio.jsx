import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../sections/CTABanner';
import TestimonialsSection from '../sections/TestimonialsSection';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projects';

export default function Portfolio() {
  useEffect(() => { document.title = 'Portfolio | NuNAI Technologies'; }, []);
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active);

  return (
    <>
      <section className="page-banner" aria-labelledby="portfolio-page-heading">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
        </div>
        <div className="page-banner-inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">Portfolio</span>
          </nav>
          <span className="section-label">Our Work</span>
          <h1 id="portfolio-page-heading">
            Projects That <span className="gradient-text">Deliver Results</span>
          </h1>
          <p>Real solutions creating measurable business impact for clients across Kenya and Africa.</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--clr-bg)' }} aria-labelledby="all-projects-heading">
        <div className="container">
          <h2 id="all-projects-heading" className="visually-hidden">All Projects</h2>

          <div className="portfolio-filters" role="tablist" aria-label="Filter projects">
            {PROJECT_CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`filter-btn${active === cat.key ? ' active' : ''}`}
                onClick={() => setActive(cat.key)}
                role="tab"
                aria-selected={active === cat.key}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={`${(i % 2) * 0.1}s`}>
                <article className="portfolio-card" aria-labelledby={`pf-${p.id}`}>
                  <div className="portfolio-visual" style={{ background: p.visualBg }} aria-hidden="true">
                    <p.icon className="portfolio-visual-icon" size={62} strokeWidth={1.45} />
                  </div>
                  <div className="portfolio-body">
                    <span className="portfolio-tag">{p.categoryLabel}</span>
                    <h3 id={`pf-${p.id}`} className="portfolio-title">{p.title}</h3>
                    <p className="portfolio-desc">{p.description}</p>
                    <div className="portfolio-tech-tags">
                      {p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
                    </div>
                    <div className="portfolio-metric">
                      <span className="metric-value">{p.metric.value}</span>
                      <span className="metric-label">{p.metric.label}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTABanner
        badge="Your Project Next"
        heading="Ready to Add Your Project to This List?"
        body="Let's discuss your challenge and build something you'll be proud to show off."
        primaryLabel="Begin Your Project"
        primaryTo="/contact"
        secondaryLabel="Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
