import { useEffect, useRef } from 'react';
import { Bot, Cloud, LockKeyhole } from 'lucide-react';
import Button from '../components/Button';
import { STATS } from '../data/technologies';

/* Typed tagline */
function useTyped(el) {
  useEffect(() => {
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const phrases = [
      'Innovate. Automate. Elevate.',
      'Building Smart Solutions.',
      'Transforming Businesses.',
      'Your Digital Partner.',
      "Powering Africa's Future.",
    ];
    let pi = 0, ci = 0, del = false, paused = false, timer;
    function type() {
      if (paused) { timer = setTimeout(type, 100); return; }
      const cur = phrases[pi];
      if (!del) {
        el.textContent = cur.slice(0, ++ci);
        if (ci === cur.length) { paused = true; timer = setTimeout(() => { paused = false; del = true; type(); }, 2400); return; }
      } else {
        el.textContent = cur.slice(0, --ci);
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
      }
      timer = setTimeout(type, del ? 38 : 68);
    }
    timer = setTimeout(type, 1200);
    return () => clearTimeout(timer);
  }, [el]);
}

/* Animated counter */
function useCounter(containerRef) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const els = root.querySelectorAll('.counter');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => { el.textContent = el.dataset.target + (el.dataset.suffix || ''); });
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const dur = 1800;
        const start = performance.now();
        function step(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Hero() {
  const taglineRef = useRef(null);
  const statsRef   = useRef(null);
  useTyped(taglineRef.current);
  useCounter(statsRef);

  /* re-run typed when ref populates */
  const taglineEl = useRef(null);
  useTyped(taglineEl.current);

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
        <div className="hero-scan" />
        {/* Floating particles */}
        {[
          { size:8,  bg:'rgba(0,194,255,0.8)',  left:'14%', dur:'9s',  delay:'0s'   },
          { size:14, bg:'rgba(69,240,154,0.7)', left:'29%', dur:'12s', delay:'1.5s' },
          { size:6,  bg:'rgba(0,194,255,0.6)',  left:'50%', dur:'10s', delay:'3s'   },
          { size:10, bg:'rgba(69,240,154,0.65)',left:'64%', dur:'11s', delay:'0.8s' },
          { size:18, bg:'rgba(0,194,255,0.35)', left:'80%', dur:'14s', delay:'2s'   },
          { size:5,  bg:'rgba(69,240,154,0.9)', left:'42%', dur:'7s',  delay:'4s'   },
          { size:12, bg:'rgba(0,194,255,0.5)',  left:'71%', dur:'13s', delay:'1s'   },
          { size:7,  bg:'rgba(69,240,154,0.75)',left:'22%', dur:'8.5s',delay:'3.5s' },
        ].map((p, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              width: p.size, height: p.size,
              background: p.bg,
              left: p.left, bottom: '-20px',
              '--dur': p.dur, '--delay': p.delay,
            }}
          />
        ))}
      </div>

      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-brand" aria-label="NuNAI Technologies brand">
            <span className="hero-logo-crop">
              <img src="/updated-logo.png" alt="NuNAI Technologies" className="hero-brand-mark" />
            </span>
          </div>

          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            Intelligence Meets Innovation
          </div>

          <h1 id="hero-heading" className="hero-heading">
            Transforming Ideas into{' '}
            <span className="gradient-text">Intelligent Digital</span>{' '}
            Solutions
          </h1>

          <p className="hero-description">
            NuNAI Technologies is a Nairobi-based technology company specialising in
            Artificial Intelligence, Software Development, Automation, and Enterprise
            Digital Transformation.
          </p>

          <p
            className="hero-tagline"
            aria-live="polite"
            ref={el => { taglineEl.current = el; }}
          >
            Innovate. Automate. Elevate.
          </p>

          <div className="hero-actions">
            <Button to="/contact" variant="primary" size="lg">Get Started</Button>
            <Button to="/services" variant="outline" size="lg">Explore Services</Button>
          </div>

          <div className="hero-stats" aria-label="Company statistics" ref={statsRef}>
            {STATS.map((s, i) => (
              <>
                {i > 0 && <div className="stat-divider" aria-hidden="true" key={`d${i}`} />}
                <div className="stat" key={s.label}>
                  <span
                    className="stat-number counter"
                    data-target={s.target}
                    data-suffix={s.suffix}
                  >
                    0
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div style={{ position: 'relative', width: '100%' }}>
            <div className="tech-card">
              <div className="tech-card-header">
                <span className="tech-dot dot-red" />
                <span className="tech-dot dot-yellow" />
                <span className="tech-dot dot-green" />
                <span className="tech-card-title">nunai-ai-engine.js</span>
              </div>
              <div className="tech-card-body">
                <div className="code-line"><span className="code-kw">import</span> NuNAI <span className="code-kw">from</span> <span className="code-str">'@nunai/core'</span></div>
                <div className="code-line" />
                <div className="code-line"><span className="code-kw">const</span> ai = <span className="code-kw">new</span> <span className="code-fn">NuNAI</span>{'({'}</div>
                <div className="code-line code-indent">model: <span className="code-str">'intelligent'</span>,</div>
                <div className="code-line code-indent">automate: <span className="code-bool">true</span>,</div>
                <div className="code-line code-indent">region: <span className="code-str">'africa'</span></div>
                <div className="code-line">{'})'}</div>
                <div className="code-line" />
                <div className="code-line"><span className="code-kw">await</span> ai.<span className="code-fn">transform</span>(business)</div>
              </div>
              <div className="tech-card-footer">
                <span className="status-dot" />
                Ready to transform your business
              </div>
            </div>

            <div className="floating-badge badge-ai">
              <Bot size={16} aria-hidden="true" /> AI Powered
            </div>
            <div className="floating-badge badge-cloud">
              <Cloud size={16} aria-hidden="true" /> Cloud Ready
            </div>
            <div className="floating-badge badge-secure">
              <LockKeyhole size={16} aria-hidden="true" /> Enterprise Secure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
