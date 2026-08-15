import { useState } from "react";
import { HeartHandshake, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./Support.css";

function SupportNotice() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`support-notice ${open ? "open" : ""}`}>
      {!open && (
        <button
          className="support-tab"
          onClick={() => setOpen(true)}
          aria-label="View free and subsidised cleaning information">
          <HeartHandshake size={18} />
          <span>FREE / SUBSIDISED CLEANING</span>
        </button>
      )}

      {open && (
        <div className="support-panel">
          <button
            className="support-close"
            onClick={() => setOpen(false)}
            aria-label="Close">
            <X size={20} />
          </button>

          <div className="support-icon">
            <HeartHandshake size={24} />
          </div>

          <p className="support-label">KAVENORA COMMUNITY SUPPORT</p>

          <h3>
            Cleaning should be
            <br />
            accessible to everyone.
          </h3>

          <p className="support-text">
            We provide free or subsidised cleaning support for vulnerable
            residents, including the elderly, households with children with
            special needs, and people living with disabilities.
          </p>

          <Link
            to="/contact"
            className="support-link"
            onClick={() => setOpen(false)}>
            Find out more
            <ArrowUpRight size={17} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default SupportNotice;
