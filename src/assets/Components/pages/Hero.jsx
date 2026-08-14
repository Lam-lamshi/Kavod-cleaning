import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label">PROFESSIONAL CLEANING SERVICES</p>

          <h1>
            A Cleaner Space.
            <span>A Better Life.</span>
          </h1>

          <p className="hero-description">
            Professional and reliable cleaning services designed to keep your
            home, office, and business looking its best.
          </p>

          <div className="hero-buttons">
            <a href="#quote" className="hero-btn primary">
              Get a Free Quote
            </a>

            <a href="#services" className="hero-btn secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
