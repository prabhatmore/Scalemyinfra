import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="about-page contact-page">

      {/* HERO SECTION - reuse About layout */}
      <section className="about-hero-section">
        <div className="about-hero-card">

          <div className="about-hero-image">
            <img
              src="/images/contact-img.png"
              alt="Cloud Consultation"
              className="contact-hero-image"
            />
          </div>

          <div className="about-hero-content">
            <h1>
              Contact <span className="highlight">Infrabryte</span>
            </h1>

            <p className="contact-trust">
              ✔ No sales pressure &nbsp; ✔ Architecture-focused &nbsp; ✔ Actionable guidance
            </p>

            <p className="contact-description">
              In today's rapidly evolving digital landscape, the cloud is the backbone of business modernization and agility. Whether you are just beginning to evaluate cloud adoption or actively planning your move to Microsoft Azure, having the right partner makes all the difference.
            </p>

            <p className="contact-description">
              Connect with our cloud experts to unlock the full potential of Azure—simplifying your migration journey, strengthening security, and driving measurable business value.
            </p>

            <p className="contact-description">
              📩 Get in touch today and take the next step toward a smarter, scalable cloud future.
            </p>

            {/* ✅ Professional form card */}
            <div className="contact-form-card">
              <ContactForm />

              {/* ✅ Trust / privacy reassurance */}
              <p className="form-note">
                🔒 We respect your privacy. No spam. No sales calls.
              </p>
            </div>
          </div>

        </div>
      </section>

    </section>
  );
}

export default Contact;

