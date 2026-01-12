function Hero({ openQuoteModal }) {
  return (
    <section className="hero hero-bliss-style">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Build. Migrate. Secure. Scale.
          </h1>

          <p className="hero-subtitle">
            Cloud & infrastructure Services That Just Work. 
            <div></div>
            We help businesses design, migrate, and manage secure Azure cloud - with zero and
            Confusion and real result.
          </p>
          <li>On-prem to Azure migrations</li>
          <li>Secure infrastructure Build</li>
          <li>Cloud Operations & Support</li>

          <div className="hero-actions">
        
            <button className="btn-primary" onClick={openQuoteModal}>
              Talk to a Cloud Expert
            </button>
          
            <span className="hero-secondary">
              <div>
              </div>
            </span>
          </div>

          <div className="hero-trust">
            <span>Microsoft Azure Focused</span>
            <span>AKS & Kubernetes Experts</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img
            src="/images/cloud_azure.gif"
            alt="Azure Cloud Engineering"
            className="hero-illustration"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

