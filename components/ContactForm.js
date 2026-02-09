import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwPE2UUxMtKcR-8L8oKSvKEauQwqp5naFIXxkEUoUoJ_qf_CjkxvObuI3syGwwVIrgIaQ/exec";

  // Handle form submit – sends data to Google Sheet
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const fullName = (formData.name || "").trim();
    const workEmail = (formData.email || "").trim();
    const requirement = (formData.message || "").trim();

    if (!fullName || !workEmail || !requirement) {
      setError("Please fill in Full Name, Work Email, and describe your requirement.");
      return;
    }

    setLoading(true);

    const data = {
      fullName,
      workEmail,
      company: formData.company || "",
      lookingFor: formData.interest || "",
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
      setSubmitted(true);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  // Success state
  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank you!</h3>
        <p>Thank you! We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Work Email *"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="company"
        placeholder="Company (optional)"
        value={formData.company}
        onChange={handleChange}
      />

      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
      >
        <option value="">What are you looking for? *</option>
        <option value="architecture">Azure / AKS Architecture</option>
        <option value="migration">Cloud Migration</option>
        <option value="cost">Cost Optimization</option>
        <option value="security">Security & Governance</option>
        <option value="other">Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Describe your requirement *"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Submitting..." : "Book Free Consultation"}
      </button>
    </form>
  );
}

export default ContactForm;
