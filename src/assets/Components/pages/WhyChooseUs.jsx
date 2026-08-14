import { ShieldCheck, Clock, Sparkles, BadgeCheck } from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    text: "Our team is committed to providing dependable and professional cleaning services.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    text: "We respect your time and make sure every cleaning service is completed efficiently.",
  },
  {
    icon: Sparkles,
    title: "Quality Cleaning",
    text: "We pay attention to the details that make your space feel truly clean.",
  },
  {
    icon: BadgeCheck,
    title: "Customer Satisfaction",
    text: "Your satisfaction is at the heart of everything we do.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-heading">
          <p className="section-label">WHY KAVOD</p>

          <h2 className="section-title">
            Cleaning you can
            <br />
            count on.
          </h2>

          <p className="section-text">
            We don't just clean spaces. We create cleaner, healthier and more
            comfortable environments.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div className="reason-card" key={index}>
                <div className="reason-icon">
                  <Icon size={32} />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
