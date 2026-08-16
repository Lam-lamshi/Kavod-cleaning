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
              KAVENORA
            </a>

            <p>
              Professional cleaning services designed to create cleaner,
              healthier and more comfortable spaces.
            </p>

            {/* Social Media */}
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/share/1c2JLR4FvG/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavenora on facebook">
                <i className="fa-brands fa-facebook fa-bounce"></i>
              </a>

              <a
                href="https://www.instagram.com/kavenora_cleaning_services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavenora on Instagram">
                <i className="fa-brands fa-instagram fa-bounce"></i>
              </a>

              <a
                href="https://x.com/kavenora_cleaning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavenora on X">
                <i className="fa-brands fa-x-twitter  fa-bounce"></i>
              </a>

              <a
                href="https://www.tiktok.com/@kavenoracleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavenora on TikTok">
                <i className="fa-brands fa-tiktok fa-bounce"></i>
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

            <p>United Kingdom</p>

            <a href="tel:+447463053148">+44 7463 053148</a>

            <a href="mailto:info@kavenoracleaningservices.com">
              info@kavenoracleaningservices.com
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
            © {currentYear} KAVENORA Cleaning Services. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>

            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
