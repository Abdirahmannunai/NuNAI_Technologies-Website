import { useEffect, useState } from 'react';

/** Page-load spinner — auto-hides once window fires 'load'. */
export default function Spinner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);
    if (document.readyState === 'complete') {
      // Already loaded
      setTimeout(hide, 300);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 300));
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`spinner-box${visible ? ' show' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="spinner" />
    </div>
  );
}
