import { Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { TESTIMONIALS } from '../data/testimonials';

function stars(n) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      size={14}
      fill={index < n ? 'currentColor' : 'none'}
      strokeWidth={1.9}
      aria-hidden="true"
    />
  ));
}

export default function TestimonialsSection() {
  const marqueeTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="Client Feedback"
            title={<>What Our <span className="gradient-text">Clients Say</span></>}
            subtitle="Hear from the businesses we have had the privilege to work with."
          />
        </ScrollReveal>

        <div className="testimonials-marquee" aria-label="Client testimonial carousel">
          <div className="testimonials-track" role="list">
            {marqueeTestimonials.map((t, i) => (
              <article className="testimonial-card" key={`${t.id}-${i}`} aria-label="Client testimonial" role="listitem">
                <div className="testimonial-quote" aria-hidden="true">“</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <strong className="testimonial-name">{t.name}</strong>
                    <span className="testimonial-role">{t.role}</span>
                  </div>
                  <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                    {stars(t.stars)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
