function Hero({ openQuoteModal }) {
  return (
    <section className="hero hero-bliss-style">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
         <h1 className="fade-up">
  Build. <span className="highlight">Migrate.</span> Secure. Scale.
</h1>

<p className="hero-subtitle fade-up fade-delay-1">
  Cloud & infrastructure services that just work.
</p>
          <p className="hero-subtitle"> 
            <div></div>
            We help businesses design, migrate, and manage secure Azure cloud - with zero and
            Confusion and real result.
          </p>
          <li>On-prem to Azure migrations</li>
          <li>Secure infrastructure Build</li>
          <li>Cloud Operations & Support</li>
        </div>

        {/* RIGHT */}
       
 <div className="hero-right">
          <img
            src="/images/cloud_latest.png"
            alt="Azure Cloud Engineering"
            className="hero-illustration"
          />
           <div className="hero-image">
    </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

