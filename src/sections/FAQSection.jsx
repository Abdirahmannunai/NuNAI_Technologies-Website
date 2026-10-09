import { useState } from 'react';
import { MessageCircle, Plus } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { FAQ } from '../data/faq';

function FAQItem({ item, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={delay}>
      <div className={`faq-item${open ? ' open' : ''}`} role="listitem">
        <button
          className="faq-question"
          aria-expanded={open}
          aria-controls={`faq-ans-${item.id}`}
          onClick={() => setOpen(p => !p)}
        >
          <span>{item.question}</span>
          <Plus className="faq-icon" aria-hidden="true" size={19} />
        </button>
        {open && (
          <div className="faq-answer" id={`faq-ans-${item.id}`}>
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

export default function FAQSection() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="FAQ"
            title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
            subtitle="Answers to the questions we hear most from businesses considering working with us."
          />
        </ScrollReveal>

        <div className="faq-grid">
          <div className="faq-list" role="list">
            {FAQ.map((item, i) => (
              <FAQItem key={item.id} item={item} delay={`${i * 0.06}s`} />
            ))}
          </div>

          <ScrollReveal delay="0.2s">
            <div className="faq-cta-card">
              <div className="faq-cta-icon" aria-hidden="true"><MessageCircle size={38} strokeWidth={1.7} /></div>
              <h3>Still Have Questions?</h3>
              <p>Our team is happy to answer any questions about your specific project or requirements.</p>
              <Button to="/contact" variant="primary" style={{ marginTop: '20px' }}>Talk to Our Team</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
