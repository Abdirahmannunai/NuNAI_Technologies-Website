import { useEffect, useRef } from 'react';

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * delay: CSS delay string e.g. '0.1s'
 */
export default function ScrollReveal({ children, delay = '0s', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}
