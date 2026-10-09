import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import cityOffice from '../assets/yibei-geng--UdYbiywGeg-unsplash.jpg';
import codingScreen from '../assets/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import workstation from '../assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg';

const SLIDES = [
  {
    id: 1,
    badge:    'Intelligence Meets Innovation',
    heading:  ['Transforming Ideas into', 'Intelligent Digital', 'Solutions'],
    accent:   1,            // which word-group index gets gradient class
    body:     'NuNAI Technologies empowers businesses through AI, Software Development, Automation, and Enterprise Digital Transformation — proudly based in Nairobi, Kenya.',
    primary:  { label: 'Get Started',    to: '/contact'   },
    secondary:{ label: 'Explore Services',   to: '/services'  },
    bg:       'linear-gradient(135deg, rgba(7,26,43,0.62) 0%, rgba(0,103,255,0.35) 100%)',
    bgImage:  cityOffice,
    accentClr:'#0066FF',
  },
  {
    id: 2,
    badge:    'Custom Software & AI',
    heading:  ['Building Smart Solutions', 'for Modern', 'African Businesses'],
    accent:   0,
    body:     'From enterprise platforms and AI chatbots to mobile applications and cloud infrastructure — we engineer technology that creates measurable results.',
    primary:  { label: 'View Our Work',      to: '/portfolio' },
    secondary:{ label: 'About Us',           to: '/about'     },
    bg:       'linear-gradient(135deg, rgba(6,34,44,0.52) 0%, rgba(13,151,135,0.38) 100%)',
    bgImage:  codingScreen,
    accentClr:'#00D4AA',
  },
  {
    id: 3,
    badge:    'Automate & Scale',
    heading:  ['Automate Your Business.', 'Elevate Your', 'Results.'],
    accent:   2,
    body:     'Reduce manual work, eliminate errors, and free your team to focus on what matters most with our intelligent business automation solutions.',
    primary:  { label: 'Automate Now',       to: '/services'  },
    secondary:{ label: 'Get a Quote',        to: '/contact'   },
    bg:       'linear-gradient(135deg, rgba(7,26,43,0.64) 0%, rgba(0,98,255,0.35) 100%)',
    bgImage:  workstation,
    accentClr:'#0066FF',
  },
];

const INTERVAL = 5500; // ms per slide

export default function HeroCarousel() {
  const [active,    setActive]    = useState(0);
  const [prev,      setPrev]      = useState(null);
  const [animDir,   setAnimDir]   = useState('next'); // 'next' | 'prev'
  const [paused,    setPaused]    = useState(false);
  const timerRef  = useRef(null);
  const trackRef  = useRef(null);

  const goTo = useCallback((idx, dir = 'next') => {
    setPrev(active);
    setAnimDir(dir);
    setActive(idx);
  }, [active]);

  const next = useCallback(() => goTo((active + 1) % SLIDES.length, 'next'), [active, goTo]);
  const prev_ = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length, 'prev'), [active, goTo]);

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  /* Keyboard */
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev_();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev_]);

  /* Touch swipe */
  const touchStart = useRef(null);
  const onTouchStart = e => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev_(); }
    touchStart.current = null;
  };

  return (
    <section
      className="hero-carousel"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      ref={trackRef}
    >
      {/* Grid + orbs background (always present) */}
      <div className="hc-bg" aria-hidden="true">
        <div className="hc-grid" />
        <div className="hc-orb hc-orb-1" />
        <div className="hc-orb hc-orb-2" />
        <div className="hc-scan" />
      </div>

      {/* Slides */}
      <div className="hc-track">
        {SLIDES.map((slide, i) => {
          const isActive = i === active;
          const isPrev   = i === prev;
          let cls = 'hc-slide';
          if (isActive) cls += ` hc-slide--in hc-slide--in-${animDir}`;
          else if (isPrev) cls += ` hc-slide--out hc-slide--out-${animDir}`;
          else cls += ' hc-slide--hidden';

          return (
            <div
              key={slide.id}
              className={cls}
              style={{ 
                '--slide-bg': slide.bg,
                backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : 'none'
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
              aria-hidden={!isActive}
            >
              <div className="hc-slide-overlay" />
              <div className="hc-inner">
                <div className="hc-content">
                  <div className="hc-badge">
                    <span className="badge-dot" aria-hidden="true" />
                    {slide.badge}
                  </div>

                  <h1 className="hc-heading">
                    {slide.heading.map((line, li) => (
                      <span
                        key={li}
                        className={`hc-line${li === slide.accent ? ' gradient-text' : ''}`}
                        style={{ animationDelay: `${0.15 + li * 0.12}s` }}
                      >
                        {line}
                        {li < slide.heading.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>

                  <p className="hc-body" style={{ animationDelay: '0.52s' }}>
                    {slide.body}
                  </p>

                  <div className="hc-actions" style={{ animationDelay: '0.68s' }}>
                    <Button to={slide.primary.to} variant="primary" size="lg">
                      {slide.primary.label}
                    </Button>
                    <Button to={slide.secondary.to} variant="outline-white" size="lg">
                      {slide.secondary.label}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next arrows */}
      <button
        className="hc-arrow hc-arrow--prev"
        onClick={prev_}
        aria-label="Previous slide"
      >
        <span aria-hidden="true">&lt;</span>
      </button>
      <button
        className="hc-arrow hc-arrow--next"
        onClick={next}
        aria-label="Next slide"
      >
        <span aria-hidden="true">&gt;</span>
      </button>

      {/* Dot indicators */}
      <div className="hc-dots" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            className={`hc-dot${i === active ? ' hc-dot--active' : ''}`}
            onClick={() => goTo(i, i > active ? 'next' : 'prev')}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hc-progress" aria-hidden="true">
        <div
          key={active}                       /* re-mount resets animation */
          className={`hc-progress-bar${paused ? ' hc-progress-bar--paused' : ''}`}
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>
    </section>
  );
}
