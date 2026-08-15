import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              KAVONERA
            </a>

            <p>
              Professional cleaning services designed to create cleaner,
              healthier and more comfortable spaces.
            </p>

            {/* Social Media */}
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>

            <a href="/services">Residential Cleaning</a>

            <a href="/services">Commercial Cleaning</a>

            <a href="/services">Deep Cleaning</a>

            <a href="/services">Move In / Move Out</a>

            <a href="/services">Post-Construction</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <p>Abuja, Nigeria</p>

            <a href="tel:+2340000000000">+234 XXX XXX XXXX</a>

            <a href="mailto:info@kavoneracleaning.com">
              info@kavoneracleaning.com
            </a>

            <Link to="/quote" className="footer-quote">
              Get a Free Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {currentYear} KAVONERA Cleaning Services. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
