import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your request has been sent successfully!");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="contact-page">
      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-info">
            <p className="section-label">CONTACT KAVENORA</p>

            <h2>
              We're here to
              <span>help.</span>
            </h2>

            <p className="contact-description">
              Whether you need residential cleaning, commercial cleaning, deep
              cleaning, or something more specific, we'd love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <h3>Call Us</h3>
                  <p>+44 7463 053148</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <h3>Email Us</h3>
                  <p>Kavenoracleaningservices@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3>Our Location</h3>
                  <p>United Kingdom</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <Clock size={22} />
                </div>

                <div>
                  <h3>Working Hours</h3>
                  <p>Monday – Saturday</p>
                  <p>8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <p className="section-label">REQUEST A QUOTE</p>

              <h2>
                Tell us what
                <span>you need.</span>
              </h2>

              <p>Fill out the form below and our team will get back to you.</p>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+44..."
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service</label>

                <select id="service" name="service" required>
                  <option value="">Select a service</option>

                  <option value="Residential Cleaning">
                    Residential Cleaning
                  </option>

                  <option value="Commercial Cleaning">
                    Commercial Cleaning
                  </option>

                  <option value="Deep Cleaning">Deep Cleaning</option>

                  <option value="Move In / Move Out">Move In / Move Out</option>

                  <option value="Post-Construction Cleaning">
                    Post-Construction Cleaning
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about the cleaning service you need..."
                  required></textarea>
              </div>

              <button type="submit">
                Send Request
                <Send size={18} />
              </button>

              {/* Submission status */}
              {result && <p className="form-result">{result}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta">
        <div>
          <p>NEED A CLEANING SERVICE?</p>

          <h2>
            Let's make your space
            <span>feel brand new.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}

export default Contact;
