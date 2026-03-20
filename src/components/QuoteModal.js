import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwPE2UUxMtKcR-8L8oKSvKEauQwqp5naFIXxkEUoUoJ_qf_CjkxvObuI3syGwwVIrgIaQ/exec";

function QuoteModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("name").value?.trim() || "";
    const workEmail = document.getElementById("email").value?.trim() || "";
    const requirement = document.getElementById("requirement").value?.trim() || "";

    if (!fullName || !workEmail || !requirement) {
      alert("Please fill in Full Name, Work Email, and Requirement.");
      return;
    }

    setLoading(true);

    const data = {
      fullName,
      workEmail,
      company: document.getElementById("company").value?.trim() || "",
      lookingFor: document.getElementById("lookingFor").value?.trim() || "",
      requirement,
    };

    try {
      // Use form-encoded + no-cors so the request isn't blocked by CORS (Apps Script doesn't send CORS headers)
      const body = new URLSearchParams(data).toString();
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      alert("Thank you! We will contact you shortly.");
      onClose();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose}>×</button>

        <h3>Get a Quick Quote</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            required
          />
          <input type="tel" id="quote-tel" placeholder="Mobile Number" />
          <input
            type="text"
            id="company"
            placeholder="Company / Location"
          />

          <select id="lookingFor" required defaultValue="">
            <option value="" disabled>Looking For</option>
            <option value="Azure & AKS Consulting">Azure & AKS Consulting</option>
            <option value="Cloud Migration">Cloud Migration</option>
            <option value="Cost Optimization">Cost Optimization</option>
            <option value="DevOps Automation">DevOps Automation</option>
          </select>

          <textarea
            id="requirement"
            placeholder="Requirement / Message"
            rows={3}
            required
          />

          <div className="form-toggle">
            <input type="checkbox" defaultChecked />
            <span>Get updates through Call & WhatsApp</span>
          </div>

          <button type="submit" className="btn-pill" disabled={loading}>
            {loading ? "Submitting..." : "GET STARTED NOW"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteModal;
