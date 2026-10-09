import { useRef, useState } from 'react';
import { Globe, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { useToast } from '../components/Toast';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY    = { firstName:'', lastName:'', company:'', email:'', phone:'', service:'', budget:'', message:'' };

export default function ContactSection() {
  const [form,    setForm]    = useState(EMPTY);
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const honeypot  = useRef(null);
  const showToast = useToast();

  const INFO = [
    { icon: MapPin, label: 'Location', value: 'Nextgen Mall, Nairobi, Kenya', href: null },
    { icon: Phone, label: 'Phone', value: '+254 799 554 498', href: 'tel:+254799554498' },
    { icon: Mail, label: 'Email', value: 'info@nunaitech.co.ke', href: 'mailto:info@nunaitech.co.ke' },
    { icon: Globe, label: 'Website', value: 'www.nunaitech.co.ke', href: 'https://www.nunaitech.co.ke' },
  ];

  function set(field) {
    return e => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
      setErrors(prev => ({ ...prev, [field]: '' }));
    };
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required.';
    if (!form.lastName.trim())  e.lastName  = 'Last name is required.';
    if (!form.email.trim() || !EMAIL_RE.test(form.email)) e.email = 'Valid email is required.';
    if (form.message.trim().length < 20) e.message = 'Please describe your project (min 20 characters).';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (honeypot.current?.value) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1600));   // replace with real API
    setLoading(false);
    setForm(EMPTY);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 7000);
    showToast("Message sent! We'll be in touch within 24 hours.", 'success');
  }
  

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <ScrollReveal>
        
        </ScrollReveal>

        <div className="contact-grid">

          {/* Info */}
          <ScrollReveal>
            <div className="contact-info-cards">
              {INFO.map(i => {
                const Icon = i.icon;
                return (
                  <div className="contact-info-card" key={i.label}>
                    <span className="contact-info-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={2.1} />
                    </span>
                    <div>
                      <h3>{i.label}</h3>
                      <p>
                        {i.href
                          ? <a href={i.href} target={i.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{i.value}</a>
                          : i.value
                        }
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <ul aria-label="Business hours">
                <li><span>Monday – Friday</span><span>9:00 AM – 5:00 PM EAT</span></li>
                <li><span>Saturday</span><span>9:00 AM – 2:00 PM EAT</span></li>
                <li><span>Sunday</span><span className="closed">Closed</span></li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay="0.15s">
            <div className="contact-form-wrap">
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact inquiry form"
              >
                <input ref={honeypot} type="text" name="website" tabIndex={-1} aria-hidden="true" autoComplete="off" className="honeypot-field" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name <span aria-hidden="true">*</span></label>
                    <input type="text" id="first-name" name="first-name" placeholder="Smith" required autoComplete="given-name" aria-required="true" value={form.firstName} onChange={set('firstName')} className={errors.firstName ? 'error' : ''} />
                    {errors.firstName && <span className="field-error" role="alert">{errors.firstName}</span>}
                {!errors.firstName && <span className="field-error"></span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name <span aria-hidden="true">*</span></label>
                    <input type="text" id="last-name" name="last-name" placeholder="Rowe" required autoComplete="family-name" aria-required="true" value={form.lastName} onChange={set('lastName')} className={errors.lastName ? 'error' : ''} />
                    {errors.lastName && <span className="field-error" role="alert">{errors.lastName}</span>}
                {!errors.lastName && <span className="field-error"></span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Organisation</label>
                  <input type="text" id="company" name="company" placeholder="Your Company Ltd" autoComplete="organization" value={form.company} onChange={set('company')} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                  <input type="email" id="email" name="email" placeholder="Smith@company.com" required autoComplete="email" aria-required="true" value={form.email} onChange={set('email')} className={errors.email ? 'error' : ''} />
                  {errors.email && <span className="field-error" role="alert">{errors.email}</span>}
                {!errors.email && <span className="field-error"></span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+254 712 345 678" autoComplete="tel" value={form.phone} onChange={set('phone')} />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service" value={form.service} onChange={set('service')}>
                      <option value="">Select a service…</option>
                      <option value="ai">AI Solutions</option>
                      <option value="software">Software Development</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="automation">Business Automation</option>
                      <option value="cloud">Cloud &amp; Enterprise</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget" value={form.budget} onChange={set('budget')}>
                      <option value="">Select budget…</option>
                      <option value="under-Kshs 30,000">Under Ksh30,000</option>
                      <option value="Ksh 30,000-150,000">Ksh30,000 – Ksh150,000</option>
                      <option value="150,000-500,000">Ksh150,000 – Ksh500,000</option>
                      <option value="500,000-plus">Ksh500,000+</option>
                      <option value="discuss">Prefer to Discuss</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Description <span aria-hidden="true">*</span></label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us about your project, goals, and timeline…" required aria-required="true" value={form.message} onChange={set('message')} className={errors.message ? 'error' : ''} />
                  {errors.message && <span className="field-error" role="alert">{errors.message}</span>}
                {!errors.message && <span className="field-error"></span>}
                </div>

                <Button type="submit" variant="primary" full disabled={loading}>
                  {loading ? <><LoaderCircle className="icon-spin" size={18} aria-hidden="true" /> Sending…</> : 'Send Message'}
                </Button>

                {success && (
                  <p className="form-success" role="alert" aria-live="polite">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
