function About() {
  return (
    <section className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-card">

          <div className="about-hero-image">
            <img
              src="/images/aboutus-img.jpg"
              alt="Infrabryte cloud infrastructure and Azure services"
            />
          </div>

          <div className="about-hero-content">
            <h1>
              About <span className="highlight">Infrabryte</span>
            </h1>

            <p>
              We are a cloud-first consulting and managed services company helping
              businesses move, secure, and scale on Microsoft Azure with confidence.
            </p>

            <p>
              Our work is driven by hands-on cloud engineering experience and real-world
              delivery across cloud migration, security, governance, and operations.
              We simplify complex IT challenges for SMBs and growing enterprises
              through practical architectures, clear execution, and reliable support.
            </p>

            <p>
              From strategy and implementation to day-to-day cloud operations, we work
              as a trusted cloud partner so you can focus on your business while we
              take care of the cloud.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT WE DO BEST */}
      <div className="about-section">
        <h2>What We Do Best</h2>
        <p>
          We design practical, cost-effective, and secure cloud solutions tailored
          to real business needs:
        </p>

        <ul className="about-list">
          <li>Cloud Migration – Lift & Shift, re-platforming, and modernization</li>
          <li>Mail & Collaboration Migration</li>
          <li>Backup & Disaster Recovery</li>
          <li>Storage & Data Services</li>
          <li>Azure Virtual Desktop (AVD)</li>
          <li>Cloud Security & Governance</li>
          <li>Managed Cloud Services</li>
        </ul>
      </div>

      {/* FOUNDER */}
      <div className="about-section about-founder">
        <h2>Who’s Behind Infrabryte</h2>
        <p>
          Infrabryte is led by a cloud engineer with hands-on experience in
          Microsoft Azure, Kubernetes (AKS), Terraform, DevOps automation,
          and cloud cost optimization.
        </p>
        <p>
          We focus on real-world cloud challenges — not theoretical designs —
          helping teams build secure, scalable, and cost-efficient platforms.
        </p>
      </div>

      {/* SPECIALIZATION */}
      <div className="about-section">
        <h2>What We Specialize In</h2>
        <ul className="about-list">
          <li>Azure architecture & landing zones</li>
          <li>Cloud Migration & Modernization</li>
          <li>Security-First Cloud Design & Governance</li>
          <li>Cloud Operations & Cost Optimization</li>
          <li>AKS & Kubernetes Production Readiness</li>
        </ul>
      </div>

      {/* HOW WE WORK */}
      <div className="about-section">
        <h2>How We Work</h2>
        <ul className="about-list">
          <li>Architecture-first, not tool-first</li>
          <li>No sales pressure or forced upsells</li>
          <li>Clear explanations, no buzzwords</li>
          <li>Direct access to senior cloud expertise</li>
          <li>Solutions designed for your scale and budget</li>
        </ul>
      </div>

      {/* APPROACH */}
      <div className="about-section">
        <h2>Our Approach</h2>
        <p>We believe cloud should be simple, transparent, and measurable.</p>

        <div className="principles-grid">
          <div className="principle-card">
            <h4>Understand First</h4>
            <p>Your business goals drive our technical decisions.</p>
          </div>

          <div className="principle-card">
            <h4>Build Right</h4>
            <p>Security by design and future-ready architecture.</p>
          </div>

          <div className="principle-card">
            <h4>Run Smart</h4>
            <p>Continuous optimization for cost, performance, and security.</p>
          </div>

          <div className="principle-card">
            <h4>No Vendor Lock-in</h4>
            <p>Decisions based on long-term flexibility.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h3>Need clarity on your cloud roadmap?</h3>
        <p className="cta-highlight">
    Book a free 30–45 minute consultation and get expert guidance — no sales pressure.
  </p>
        <a href="/contact" className="btn-primary">
          Book Free Cloud Consultation
        </a>
      </div>

    </section>
  );
}

export default About;
