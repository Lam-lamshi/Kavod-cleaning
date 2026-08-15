import { Link } from "react-router-dom";
import Aos from "aos";
import {
  Home,
  Building2,
  Sparkles,
  Truck,
  Hammer,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";

import { useState } from "react";
import "./Services.css";

const services = [
  {
    icon: Home,
    number: "01",
    title: "Residential Cleaning",
    shortDescription:
      "A fresh, comfortable and spotless home without the stress of doing it all yourself.",
    description:
      "Our residential cleaning service is designed to keep your home looking fresh, healthy and welcoming. From everyday cleaning to detailed attention to kitchens, bathrooms and living spaces, our team takes care of the details so you can enjoy your home.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    included: [
      "Living room cleaning",
      "Bedroom cleaning",
      "Kitchen cleaning",
      "Bathroom sanitization",
      "Dusting and surface cleaning",
      "Floor cleaning",
    ],
  },
  {
    icon: Building2,
    number: "02",
    title: "Commercial Cleaning",
    shortDescription:
      "Professional cleaning solutions that keep your workplace clean, organized and presentable.",
    description:
      "A clean workplace creates a better environment for employees, customers and visitors. KAVONERA provides reliable commercial cleaning solutions for offices, businesses and professional spaces.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    included: [
      "Office cleaning",
      "Reception and common areas",
      "Restroom cleaning",
      "Floor and surface cleaning",
      "Dust and waste removal",
      "Scheduled cleaning services",
    ],
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Deep Cleaning",
    shortDescription:
      "A detailed clean that reaches the places regular cleaning often misses.",
    description:
      "When your space needs more than a quick clean, our deep cleaning service provides the extra attention it deserves. We focus on overlooked areas, stubborn dirt and surfaces that need a thorough refresh.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=85",
    included: [
      "Detailed kitchen cleaning",
      "Deep bathroom cleaning",
      "Hard-to-reach areas",
      "Dust and grime removal",
      "Floor deep cleaning",
      "Detailed surface cleaning",
    ],
  },
  {
    icon: Truck,
    number: "04",
    title: "Move In / Move Out",
    shortDescription:
      "Leave your old space clean or start your new chapter in a spotless home.",
    description:
      "Moving can be stressful enough without worrying about cleaning. Our move-in and move-out cleaning service helps you leave a property looking its best or arrive at your new space feeling completely refreshed.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    included: [
      "Empty property cleaning",
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Cabinet and surface cleaning",
      "Floor cleaning",
      "Final detailed clean",
    ],
  },
  {
    icon: Hammer,
    number: "05",
    title: "Post Construction",
    shortDescription:
      "Transform newly completed spaces by removing dust, dirt and construction residue.",
    description:
      "Construction can leave behind dust, debris and residue that ordinary cleaning cannot handle properly. Our post-construction cleaning service prepares your newly completed space for use.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    included: [
      "Construction dust removal",
      "Surface cleaning",
      "Floor cleaning",
      "Window cleaning",
      "Debris removal",
      "Final space preparation",
    ],
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <div>
              <p className="section-label" data-aos="fade-right">
                WHAT WE DO
              </p>

              <h2
                className="section-title"
                data-aos="fade-right"
                data-delay="100">
                Cleaning services
                <br />
                <span>made for you.</span>
              </h2>
            </div>

            <div className="services-intro">
              <p data-aos="fade-right" data-delay="200">
                From everyday cleaning to detailed deep cleaning, KAVONERA
                provides professional solutions designed around your space.
              </p>

              <Link to="/quote" className="services-cta">
                Get a free quote <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.number}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={service.number * 100}>
                  <div
                    className="service-image"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}>
                    <div className="service-number">{service.number}</div>

                    <div className="service-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="service-content">
                    <h3>{service.title}</h3>

                    <p>{service.shortDescription}</p>

                    <button
                      className="view-more"
                      onClick={() => setSelectedService(service)}>
                      View More
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="services-bottom">
            <div>
              <span>QUALITY • CARE • PROFESSIONALISM</span>
              <h3>
                A cleaner space.
                <br />A better feeling.
              </h3>
            </div>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bottom-quote">
              Book a cleaning <ArrowUpRight size={18} />{" "}
            </Link>
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="service-modal-overlay"
          onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedService(null)}>
              <X size={23} />
            </button>

            <div
              className="modal-image"
              style={{
                backgroundImage: `url(${selectedService.image})`,
              }}>
              <div className="modal-image-overlay">
                <span>{selectedService.number}</span>
                <h2>{selectedService.title}</h2>
              </div>
            </div>

            <div className="modal-content">
              <p className="modal-label">KAVONERA CLEANING SERVICES</p>

              <h3>Professional cleaning, done right.</h3>

              <p className="modal-description">{selectedService.description}</p>

              <div className="included-section">
                <h4>What's included</h4>

                <div className="included-grid">
                  {selectedService.included.map((item, index) => (
                    <div className="included-item" key={index}>
                      <CheckCircle2 size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#quote"
                className="modal-quote"
                onClick={() => setSelectedService(null)}>
                Get a free quote
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
