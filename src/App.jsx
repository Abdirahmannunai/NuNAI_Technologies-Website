import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import ThemeToggle from './components/ThemeToggle';
import { ToastProvider } from './components/Toast';
import WhatsAppBtn from './components/WhatsAppBtn';

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import Terms from './pages/Terms';

const THEME_STORAGE_KEY = 'nunai-theme-v2';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

/* Theme persistence */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) return stored;
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  return [theme, toggle];
}

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ToastProvider>
      <Spinner />
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="site-scale">
        <Navbar />

        <main id="main-content">
          <ScrollToTop />
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/about"     element={<About />} />
            <Route path="/services"  element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog"      element={<Blog />} />
            <Route path="/contact"   element={<Contact />} />
            <Route path="/privacy"   element={<Privacy />} />
            <Route path="/terms"     element={<Terms />} />
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
      <ThemeToggle theme={theme} onToggleTheme={toggleTheme} />
      <BackToTop />
      <WhatsAppBtn />
    </ToastProvider>
  );
}
