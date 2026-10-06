import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-logo">RK</span>
            <span className="footer-studio">ROHIT R KULKARNI</span>
          </div>

          <div className="footer-center">
            <span className="footer-copyright">
              © {currentYear} Rohit R Kulkarni. All rights reserved.
            </span>
          </div>

          <div className="footer-right">
            <span className="footer-coordinates arch-coordinates">
              16.8302° N, 75.7100° E
            </span>
          </div>
        </div>

        <div className="footer-line" />

        <div className="footer-bottom">
          <span className="footer-tagline">
            Designing spaces that feel meaningful, functional, and deeply connected to people and place.
          </span>
        </div>
      </div>
    </footer>
  );
}
