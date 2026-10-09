import { LoaderCircle, LockKeyhole } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import { useToast } from '../components/Toast';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const [email,   setEmail]   = useState('');
  const [error,   setError]   = useState('');
  const [loading, setLoading] = useState(false);
  const honeypot  = useRef(null);
  const showToast = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    if (honeypot.current?.value) return;           // bot
    if (!email.trim() || !EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));   // replace with real API
    setLoading(false);
    setEmail('');
    showToast('You\'re subscribed! Thanks for joining.', 'success');
  }

  return (
    <section className="newsletter-section" id="newsletter" aria-labelledby="newsletter-heading">
      <div className="container">
        <ScrollReveal>
          <div className="newsletter-inner">
            <div className="newsletter-content">
              <span className="section-label">Stay Updated</span>
              <h2 id="newsletter-heading" style={{ textAlign: 'left', marginBottom: '12px' }}>
                Get Tech Insights &amp;{' '}
                <span className="gradient-text">Company Updates</span>
              </h2>
              <p style={{ color: 'var(--clr-text-muted)', lineHeight: 1.75 }}>
                Join our newsletter for AI insights, technology trends, and NuNAI project
                updates. No spam — only content worth reading.
              </p>
            </div>

            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Newsletter subscription form"
            >
              {/* Honeypot */}
              <input
                ref={honeypot}
                type="text"
                name="website"
                tabIndex={-1}
                aria-hidden="true"
                autoComplete="off"
                className="honeypot-field"
              />

              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby="newsletter-error"
                  className={error ? 'error' : ''}
                />
                <Button type="submit" variant="primary" disabled={loading}>
                  {loading ? <><LoaderCircle className="icon-spin" size={18} aria-hidden="true" /> Subscribing…</> : 'Subscribe'}
                </Button>
              </div>

              {error && (
                <span className="field-error" id="newsletter-error" role="alert" aria-live="polite">
                  {error}
                </span>
              )}

              <p className="newsletter-privacy"><LockKeyhole size={14} aria-hidden="true" /> We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
