import { useEffect } from 'react';
import Button from '../components/Button';

export default function NotFound() {
  useEffect(() => { document.title = '404 – Page Not Found | NuNAI Technologies'; }, []);

  return (
    <div className="error-page">
      <div>
        <div className="error-code" aria-hidden="true">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-msg">
          Looks like this page went somewhere else.<br />
          Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button to="/" variant="primary" size="lg">Go Home</Button>
          <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
