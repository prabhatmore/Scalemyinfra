function About() {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>About <span className="highlight">infrabryte</span></h1>
        <p className="about-intro">
          We are a cloud-first consulting and managed services company dedicated to helping businesses move, secure, and grow on Microsoft Azure with confidence.
we specialize in simplifying complex IT challenges for SMBs and growing enterprises. From strategy to execution and ongoing support, we act as your trusted cloud partner—so you can focus on your business while we take care of the cloud.
        </p>
      </div>

      {/* WHY */}
      <div className="about-section">
        <h2>What We Do Best</h2>
        <p>We design practical, cost-effective, and secure cloud solutions tailored to real business needs:
          <ul className="about-list"></ul>
          	<li>Cloud Migration – Lift & Shift, re-platforming, and modernization with minimal downtime</li>
            <li>Mail & Collaboration Migration – Smooth transitions to modern, secure communication platforms</li>
            <li>Backup & Disaster Recovery – Reliable data protection and business continuity</li>
            <li>Storage & Data Services – Secure, scalable, and optimized storage architectures</li>
            <li>Azure Virtual Desktop (AVD) – Enable secure remote work with optimized performance</li>
            <li>Cloud Security & Governance – Improve security posture, compliance, and Azure Secure Score</li>
            <li>Managed Cloud Services – Ongoing monitoring, optimization, and support</li>
        </p>
      </div>
      <div className="about-section about-founder">
  <h2>Who’s Behind infrabryte</h2>
  <p>
    infra bryte is led by a cloud engineer with hands-on experience in
    Microsoft Azure, Kubernetes (AKS), Terraform, DevOps automation,
    and cloud cost optimization.
  </p>
  <p>
    We focus on real-world cloud challenges — not theoretical designs —
    helping teams build secure, scalable, and cost-efficient platforms.
  </p>
</div>


      {/* FOCUS */}
      <div className="about-section">
        <h2>What We Specialize In</h2>
        <ul className="about-list">
          <li>Microsoft Azure architecture & landing zones</li>
          <li>AKS & Kubernetes production readiness</li>
          <li>Cloud migration & modernization</li>
          <li>Cost optimization & governance</li>
          <li>Security-first cloud design (Zero Trust, policies, hardening)</li>
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
      <div className="about-section">
  <h2>Our Approach</h2>
    <p>We believe cloud should be simple, transparent, and measurable.</p>
  <div className="principles-grid">
    <div className="principle-card">
      <h4>Understand First</h4>
      <p>Your business goals drive our technical decisions.</p>
    </div>

    <div className="principle-card">
      <h4>Build right </h4>
      <p>Best practices, security by design, and future-ready architecture</p>
    </div>

    <div className="principle-card">
      <h4>Run smart</h4>
      <p>Continuous optimization for cost, performance, and security.</p>
    </div>

    <div className="principle-card">
      <h4>No Vendor Lock-in</h4>
      <p>Decisions based on long-term flexibility.</p>
    </div>
  </div>
</div>

      {/* WHO WE HELP */}
      <div className="about-section">
        <h2>Who We Help</h2>
        <p>
          We work with startups, growing teams, and organizations that want
          clarity and confidence in their cloud decisions.
        </p>
        <ul className="about-list">
          <li>Startups building on Microsoft Azure</li>
          <li>Teams adopting Kubernetes & AKS</li>
          <li>Companies modernizing legacy infrastructure</li>
          <li>Organizations struggling with Azure cost or complexity</li>
        </ul>
      </div>

      {/* VISION */}
      <div className="about-section about-vision">
        <h2>Our Vision</h2>
        <p>
          To become a trusted cloud partner for businesses looking to optimize, secure, and grow in the cloud—without confusion or hidden costs.  
        </p>
      </div>

      {/* CTA */}
 <div className="about-cta">
  <h3>Need clarity on your cloud roadmap?</h3>
  <p>
    Book a free 30–45 minute consultation and get expert guidance —
    no sales pressure.
  </p>
  <a href="/contact" className="btn-primary">
    Book Free Cloud Consultation
  </a>
</div>


    </section>
  );
}

export default About;

