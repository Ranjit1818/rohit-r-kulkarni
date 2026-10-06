import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-menu-open' : ''}`}
      >
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" data-cursor="Home">
            <span className="navbar-logo-text">RK</span>
            <span className="navbar-logo-full">ROHIT R KULKARNI</span>
          </Link>

          <div className="navbar-links">
            <button onClick={() => scrollToSection('work')} data-cursor="">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} data-cursor="">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} data-cursor="">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} data-cursor="">
              Contact
            </button>
          </div>

          <button
            className="navbar-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            data-cursor=""
          >
            <span className="navbar-menu-line" />
            <span className="navbar-menu-line" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div className={`fullscreen-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="fullscreen-menu-content">
          <div className="fullscreen-menu-links">
            <button onClick={() => scrollToSection('work')}>
              <span className="menu-link-number">01</span>
              <span className="menu-link-text">Work</span>
            </button>
            <button onClick={() => scrollToSection('about')}>
              <span className="menu-link-number">02</span>
              <span className="menu-link-text">About</span>
            </button>
            <button onClick={() => scrollToSection('experience')}>
              <span className="menu-link-number">03</span>
              <span className="menu-link-text">Experience</span>
            </button>
            <button onClick={() => scrollToSection('contact')}>
              <span className="menu-link-number">04</span>
              <span className="menu-link-text">Contact</span>
            </button>
          </div>

          <div className="fullscreen-menu-footer">
            <div className="fullscreen-menu-info">
              <span className="text-label">Vijayapura, Karnataka</span>
              <span className="text-label">rohitkulkarni.arch@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
