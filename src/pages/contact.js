import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="contact-hero">
      <h1>
        Book Your <span className="highlight">Free Cloud Consultation</span>
      </h1>

      <p className="contact-trust">
        ✔ No sales pressure &nbsp; • &nbsp; ✔ Architecture-focused &nbsp; • &nbsp; ✔ Actionable guidance
      </p>

     <p className="contact-subtitle">
  30–45 minutes with an Azure & Kubernetes expert ·
  Clear roadmap for security, cost & architecture
    </p>


      <p className="contact-description">
        Get a clear, actionable roadmap tailored to your cloud architecture,
        security posture, and cost optimization goals.
      </p>

      {/* ✅ Professional form card */}
      <div className="contact-form-card">
        <ContactForm />

        {/* ✅ Trust / privacy reassurance */}
        <p className="form-note">
          🔒 We respect your privacy. No spam. No sales calls.
        </p>
      </div>
    </section>
  );
}

export default Contact;
