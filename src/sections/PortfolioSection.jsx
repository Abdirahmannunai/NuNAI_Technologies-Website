import { useState } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projects';

function ProjectCard({ project, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <article
        className="portfolio-card"
        aria-labelledby={`proj-${project.id}`}
      >
        <div
          className="portfolio-visual"
          style={{ background: project.visualBg }}
          aria-hidden="true"
        >
          <project.icon className="portfolio-visual-icon" size={62} strokeWidth={1.45} />
        </div>
        <div className="portfolio-body">
          <span className="portfolio-tag">{project.categoryLabel}</span>
          <h3 id={`proj-${project.id}`} className="portfolio-title">{project.title}</h3>
          <p className="portfolio-desc">{project.description}</p>
          <div className="portfolio-tech-tags">
            {project.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
          </div>
          <div className="portfolio-metric">
            <span className="metric-value">{project.metric.value}</span>
            <span className="metric-label">{project.metric.label}</span>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function PortfolioSection({ limit = 4 }) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? PROJECTS.slice(0, limit)
    : PROJECTS.filter(p => p.category === active).slice(0, limit);

  return (
    <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="Our Work"
            title={<>Featured <span className="gradient-text">Projects</span></>}
            subtitle="Real solutions delivering measurable results for our clients."
          />
        </ScrollReveal>

        <div className="portfolio-filters" role="tablist" aria-label="Filter projects by category">
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

        <div className="portfolio-grid" id="portfolio-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={`${(i % 2) * 0.1}s`} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Button to="/portfolio" variant="outline" size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
