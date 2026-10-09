import { Rocket } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

export default function CTABanner({
  badge   = 'Ready to Get Started?',
  heading = "Let's Build Something Exceptional Together",
  body    = "Tell us about your project and we'll show you exactly how NuNAI Technologies can deliver results for your business.",
  primaryLabel  = 'Get Started',
  primaryTo     = '/contact',
  secondaryLabel = 'Explore Services',
  secondaryTo    = '/services',
}) {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="container">
        <ScrollReveal>
          <div className="cta-content">
            {badge && <div className="cta-badge"><Rocket size={17} aria-hidden="true" />{badge}</div>}
            <h2 id="cta-heading">{heading}</h2>
            <p>{body}</p>
            <div className="cta-actions">
              <Button to={primaryTo} variant="ghost"
                style={{ background:'var(--dark)', color:'#fff', border:'2px solid transparent' }}
              >
                {primaryLabel}
              </Button>
              {secondaryLabel && (
                <Button to={secondaryTo} variant="outline-white">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
