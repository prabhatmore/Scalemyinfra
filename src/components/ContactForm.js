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

  // Handle form submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  try {
    await fetch("", {
      method: "POST",
      mode: "no-cors", //  REQUIRED
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // If no error thrown → SUCCESS
    setSubmitted(true);

  } catch (err) {
    setError("Submission failed. Please try again.");
  }
};


  // Success state
  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank you!</h3>
        <p>
          Your request has been received.  
          Our cloud expert will contact you shortly.
        </p>
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
        placeholder="Briefly describe your requirement (optional)"
        value={formData.message}
        onChange={handleChange}
      />

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Submitting..." : "Book Free Consultation"}
      </button>
    </form>
  );
}

export default ContactForm;
