function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-container">

        {/* Left Highlight Card */}
        <div className="why-left">
          <div className="why-left-content">
            <h2>Why Choose Us</h2>
            <p>
              We deliver secure, scalable, and high-performing Azure cloud solutions,
              backed by deep expertise and proactive support.
            </p>
            <a href="/contact" className="primary-btn">
              Get Started Now
            </a>
          </div>
          <div className="why-left-image">
            <img 
              src="/images/whychoseus.png" 
              alt="Why choose us - Cloud computing and Azure services illustration"
              className="why-image"
            />
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="why-right">
          <div className="feature-card">
            <h4>Expertise in Cloud Services</h4>
            <p>
              Proven experience across Azure migration, security, optimization,
              and cloud operations.
            </p>
          </div>

          <div className="feature-card">
            <h4>Security &amp; Compliance</h4>
            <p>
              Strong security posture aligned with Azure best practices and
              compliance standards.
            </p>
          </div>

          <div className="feature-card">
            <h4>Reliability &amp; Performance</h4>
            <p>
              Highly available, resilient, and performance-optimized cloud
              environments.
            </p>
          </div>

          <div className="feature-card">
            <h4>Scalability</h4>
            <p>
              Cloud solutions designed to scale seamlessly with your business growth.
            </p>
          </div>
        </div>

      </div>

      {/* Callback Strip */}
      <div className="callback-strip">
        <p>
          If for any reason you are unable to reach us,
          request a callback and we’ll get in touch shortly.
        </p>
        <a href="/contact#callback" className="secondary-btn">
          Request a Callback
        </a>
      </div>

      {/* Trust Badges */}
      <div className="trust-cards">
        <div className="trust-card">
          <h4>24×7 Support</h4>
          <p>Round-the-clock cloud support</p>
        </div>

        <div className="trust-card">
          <h4>Delivery Assurance</h4>
          <p>Post-delivery service assurance</p>
        </div>

        <div className="trust-card">
          <h4>99.9% Uptime</h4>
          <p>Reliable and stable infrastructure</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

