import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="about-page contact-page">
      <section className="contact-layout">
        <div className="contact-info-panel">
          <span className="contact-eyebrow">CLOUD CONSULTATION</span>
          <h1>
            Let&apos;s Get <span className="highlight">Started</span>
          </h1>
          <p className="contact-trust">
            No sales pressure • Architecture-focused • Actionable guidance
          </p>
          <p className="contact-description">
            Connect with our cloud experts to unlock the full potential of Azure:
            simplify migration, strengthen security, and drive measurable business
            value.
          </p>

          <div className="contact-points">
            <div className="contact-point">Migration and modernization roadmap</div>
            <div className="contact-point">Security-first architecture review</div>
            <div className="contact-point">Cost and performance optimization advice</div>
          </div>

          <p className="contact-description contact-description-cta">
            Get in touch and take the next step toward a smarter cloud setup.
          </p>
        </div>

        <div className="contact-form-panel">
          <img
            src="/images/contact-img.png"
            alt="Cloud consultation"
            className="contact-hero-image"
          />
          <div className="contact-form-card">
            <h3>Book Your Free Consultation</h3>
            <p>Tell us your requirement and our team will contact you shortly.</p>
            <ContactForm />
            <p className="form-note">We respect your privacy. No spam. No sales calls.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;

