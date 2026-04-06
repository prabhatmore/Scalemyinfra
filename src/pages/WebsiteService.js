import React, { useEffect } from "react";
import "./WebsiteService.css";

function WebsiteService() { 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="website-page">

      {/* HERO */}
      <section
        className="ws-hero"
        style={{
          backgroundImage: "url('/images/website.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
      </section>

      {/* FEATURES */}
      <section className="ws-features">
        <h2>What You Get</h2>

        <div className="ws-grid">
          <div className="ws-card">
            <h3>🎨 Custom Design</h3>
            <p>Tailored UI aligned with your business identity.</p>
          </div>

          <div className="ws-card">
            <h3>⚡ High Performance</h3>
            <p>Fast loading, optimized for user experience.</p>
          </div>

          <div className="ws-card">
            <h3>📈 SEO Ready</h3>
            <p>Built with search engine best practices.</p>
          </div>

          <div className="ws-card">
            <h3>🔐 Secure</h3>
            <p>Production-ready and secure deployment.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="ws-pricing">
        <h2>Simple Pricing</h2>

        <div className="ws-pricing-grid">

          <div className="price-card">
            <h3>Starter</h3>
            <p className="price">₹9,999</p>
            <ul>
              <li>3 Pages</li>
              <li>Mobile Responsive</li>
              <li>Basic SEO</li>
            </ul>
            <button>Get Started</button>
          </div>

          <div className="price-card highlight">
            <h3>Business</h3>
            <p className="price">₹19,999</p>
            <ul>
              <li>5–7 Pages</li>
              <li>Performance Optimized</li>
              <li>Contact Forms</li>
            </ul>
            <button>Get Started</button>
          </div>

          <div className="price-card">
            <h3>Advanced</h3>
            <p className="price">Custom</p>
            <ul>
              <li>Custom Features</li>
              <li>Integrations</li>
              <li>Support</li>
            </ul>
            <button>Contact Us</button>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="final-cta"
        style={{
          background: `linear-gradient(rgba(121, 182, 210, 0.6), rgba(117, 141, 245, 0.7))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px"
        }}
      >
        <h2>Ready to Launch Your Website?</h2>
        <p>Fast setup. No hassle. Real results.</p>

        <button className="header-cta">
          🚀 Start Your Website Today
        </button>
      </section>

    </div>
  );
}

export default WebsiteService;