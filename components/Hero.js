function Hero({ openQuoteModal }) {
  return (
    <section className="hero hero-bliss-style" style={{ backgroundImage: "url('/images/hero.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
         <h1 className="fade-up">
  Build. <span className="highlight">Migrate.</span> Secure. Scale.
</h1>

          <p className="hero-subtitle"> 
            <div></div>
            We help businesses design, migrate, and manage secure Azure cloud environments with zero confusion and real results.
          </p>
          <li>On-prem to Azure migrations</li>
          <li>Secure infrastructure Build</li>
          <li>Cloud Operations & Support</li>
        </div>

        {/* RIGHT */}
       
 <div className="hero-right">
           <div className="hero-image">
    </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

