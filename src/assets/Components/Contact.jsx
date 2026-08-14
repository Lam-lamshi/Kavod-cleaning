import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      {/* Contact Hero */}

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-info">
            <p className="section-label">CONTACT KAVOD</p>

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
                  <p>+234 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <h3>Email Us</h3>
                  <p>info@kavodcleaning.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3>Our Location</h3>
                  <p>Abuja, Nigeria</p>
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

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input type="tel" id="phone" placeholder="+234..." required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service</label>

                <select id="service" required>
                  <option value="">Select a service</option>

                  <option value="residential">Residential Cleaning</option>

                  <option value="commercial">Commercial Cleaning</option>

                  <option value="deep">Deep Cleaning</option>

                  <option value="move">Move In / Move Out</option>

                  <option value="construction">
                    Post-Construction Cleaning
                  </option>

                  <option value="special">Special Cleaning</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about the cleaning service you need..."
                  required></textarea>
              </div>

              <button type="submit">
                Send Request
                <Send size={18} />
              </button>
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
