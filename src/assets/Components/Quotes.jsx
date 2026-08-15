import { useEffect } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import AOS from "aos";

import "./Quotes.css";

function Quote() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main className="quote-page">
      {/* HERO */}
      <section className="quote-hero">
        <div className="quote-hero-inner">
          <div className="quote-hero-content" data-aos="fade-up">
            <p className="quote-label">GET A FREE QUOTE</p>

            <h1>
              Let's make your
              <br />
              space <span>shine.</span>
            </h1>

            <p className="quote-intro">
              Tell us a little about your cleaning needs and our team will get
              back to you with a personalised quote.
            </p>

            <div className="quote-benefits">
              <div className="quote-benefit">
                <CheckCircle2 size={20} />
                <span>Professional cleaning</span>
              </div>

              <div className="quote-benefit">
                <CheckCircle2 size={20} />
                <span>Flexible service options</span>
              </div>

              <div className="quote-benefit">
                <CheckCircle2 size={20} />
                <span>No obligation to book</span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div
            className="quote-form-wrapper"
            data-aos="fade-left"
            data-aos-delay="150">
            <div className="quote-form-header">
              <p>YOUR DETAILS</p>

              <h2>
                Request your
                <br />
                free quote
              </h2>
            </div>

            <form className="quote-form">
              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="quote-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="service">Service Required</label>

                  <select id="service" required>
                    <option value="">Select a service</option>

                    <option value="residential">Residential Cleaning</option>

                    <option value="commercial">Commercial Cleaning</option>

                    <option value="deep-cleaning">Deep Cleaning</option>

                    <option value="move-in-out">Move In / Move Out</option>

                    <option value="post-construction">Post Construction</option>
                  </select>
                </div>

                <div className="quote-field">
                  <label htmlFor="property">Property Type</label>

                  <select id="property" required>
                    <option value="">Select property</option>

                    <option value="house">House</option>

                    <option value="apartment">Apartment</option>

                    <option value="office">Office</option>

                    <option value="commercial">Commercial Space</option>

                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="location">Location</label>

                  <input
                    id="location"
                    type="text"
                    placeholder="Area / City"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="date">Preferred Date</label>

                  <input id="date" type="date" />
                </div>
              </div>

              <div className="quote-field">
                <label htmlFor="message">
                  Tell us about your cleaning needs
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about the property, size, rooms, or anything else we should know..."
                />
              </div>

              <button type="submit" className="quote-submit">
                Request My Free Quote
                <ArrowUpRight size={19} />
              </button>

              <p className="quote-note">
                Your information is only used to respond to your cleaning
                enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Quote;
