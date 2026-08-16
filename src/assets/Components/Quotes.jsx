import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import AOS from "aos";

import "./Quotes.css";

function Quote() {
  const [result, setResult] = useState("");

  useEffect(() => {
    AOS.refresh();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending your quote request...");

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    // Optional: customize the email subject
    formData.append("subject", "New Free Quote Request - Kavenora Cleaning");

    // Optional: identify where the submission came from
    formData.append("from_name", "Kavenora Cleaning Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "Your quote request has been sent successfully! We'll get back to you soon.",
        );

        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult(
        "Unable to send your request. Please check your internet connection and try again.",
      );
    }
  };

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

            <form className="quote-form" onSubmit={onSubmit}>
              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    name="phone"
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
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="service">Service Required</label>

                  <select id="service" name="service" required>
                    <option value="">Select a service</option>

                    <option value="Residential Cleaning">
                      Residential Cleaning
                    </option>

                    <option value="Commercial Cleaning">
                      Commercial Cleaning
                    </option>

                    <option value="Deep Cleaning">Deep Cleaning</option>

                    <option value="Move In / Move Out">
                      Move In / Move Out
                    </option>

                    <option value="Post Construction">Post Construction</option>
                  </select>
                </div>

                <div className="quote-field">
                  <label htmlFor="property">Property Type</label>

                  <select id="property" name="property" required>
                    <option value="">Select property</option>

                    <option value="House">House</option>

                    <option value="Apartment">Apartment</option>

                    <option value="Office">Office</option>

                    <option value="Commercial Space">Commercial Space</option>

                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="location">Location</label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Area / City"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="date">Preferred Date</label>

                  <input id="date" name="preferred_date" type="date" />
                </div>
              </div>

              <div className="quote-field">
                <label htmlFor="message">
                  Tell us about your cleaning needs
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about the property, size, rooms, or anything else we should know..."
                />
              </div>

              <button
                type="submit"
                className="quote-submit"
                disabled={result.startsWith("Sending")}>
                {result.startsWith("Sending")
                  ? "Sending..."
                  : "Request My Free Quote"}

                <ArrowUpRight size={19} />
              </button>

              {result && <p className="quote-result">{result}</p>}

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
