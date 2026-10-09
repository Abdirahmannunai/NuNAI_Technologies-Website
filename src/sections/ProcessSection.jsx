import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { PROCESS_STEPS } from '../data/process';

export default function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="Our Process"
            title={<>How We <span className="gradient-text">Work</span></>}
            subtitle="A clear, structured process that delivers results from discovery to deployment."
          />
        </ScrollReveal>

        <div className="process-steps">
          {PROCESS_STEPS.map((step, i) => (
            <>
              {i > 0 && <div className="process-connector" aria-hidden="true" key={`conn-${i}`} />}
              <ScrollReveal delay={`${i * 0.12}s`} key={step.id}>
                <div className="process-step">
                  <div className="step-number" aria-hidden="true">{step.number}</div>
                  <div className="step-content">
                    <div className="step-icon" aria-hidden="true"><step.icon size={28} strokeWidth={1.8} /></div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
