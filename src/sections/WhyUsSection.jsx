import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { WHY_US, INDUSTRIES } from '../data/technologies';

export default function WhyUsSection() {
  return (
    <section className="why-section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="Why NuNAI"
            title={<>Why Businesses Choose <span className="gradient-text">NuNAI Technologies</span></>}
            subtitle="We combine technical excellence with a genuine understanding of how businesses operate."
          />
        </ScrollReveal>

        <div className="why-grid">
          {WHY_US.map((w, i) => (
            <ScrollReveal key={w.title} delay={`${i * 0.08}s`}>
              <div className="why-card">
                <div className="why-icon" aria-hidden="true"><w.icon size={26} strokeWidth={1.8} /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="industries-section">
          <h3 className="industries-heading">Industries We Serve</h3>
          <div className="industries-grid" role="list" aria-label="Industries served">
            {INDUSTRIES.map(({ label, icon: Icon }) => (
              <span className="industry-tag" role="listitem" key={label}><Icon size={16} aria-hidden="true" />{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
