import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85"
            alt="Professional cleaning service"
          />
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT KAVOD</p>

          <h2 className="section-title">
            More than cleaning.
            <br />
            We care about your space.
          </h2>

          <p className="section-text">
            At KAVOD Cleaning Services, we believe that a clean environment
            creates a better experience.
          </p>

          <p className="section-text">
            Our goal is simple: provide reliable, professional and detailed
            cleaning services that allow our customers to enjoy clean and
            comfortable spaces without the stress.
          </p>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="about-button">
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
