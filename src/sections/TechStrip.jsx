import { TECHNOLOGIES } from '../data/technologies';

export default function TechStrip() {
  return (
    <section className="tech-strip" aria-labelledby="tech-strip-label">
      <div className="container">
        <p id="tech-strip-label" className="tech-strip-label">Technologies We Work With</p>
        <div className="tech-logos" aria-label="Technology stack">
          {TECHNOLOGIES.map(t => (
            <span className="tech-badge" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
