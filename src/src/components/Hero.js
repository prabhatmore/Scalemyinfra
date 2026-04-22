import {
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaCloudUploadAlt,
  FaServer,
  FaHeadset,
} from "react-icons/fa";
import heroIllustration from "../../images/background.png";

function Hero({ openQuoteModal }) {
  return (
    <section className="hero hero-reference">
      <div className="hero-reference-shell">
        <div className="hero-reference-main">
          <div className="hero-reference-left">
            <span className="hero-reference-badge">AZURE CLOUD SOLUTIONS</span>
            <h1>Build. Migrate. Secure. Scale.</h1>

            <p className="hero-reference-subtitle">
              We help businesses design, migrate, and manage secure Azure cloud
              environments with zero confusion and real results.
            </p>

            <div className="hero-reference-highlights">
              <div className="hero-reference-highlight">
                <FaShieldAlt />
                <div>
                  <strong>Secure by Design</strong>
                  <p>Built-in security and compliance at every layer.</p>
                </div>
              </div>
              <div className="hero-reference-highlight">
                <FaCloud />
                <div>
                  <strong>Scalable by Default</strong>
                  <p>Flexible infrastructure that grows with you.</p>
                </div>
              </div>
              <div className="hero-reference-highlight">
                <FaChartLine />
                <div>
                  <strong>Optimized for Cost</strong>
                  <p>Maximize value with smart architecture and automation.</p>
                </div>
              </div>
            </div>

            <div className="hero-reference-actions">
              <a href="/services" className="hero-reference-btn hero-reference-btn-primary">
                Explore Services &rarr;
              </a>
              <a href="/contact" className="hero-reference-btn hero-reference-btn-secondary">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-reference-right">
            <img
              className="hero-reference-art"
              src={heroIllustration}
              alt="Azure cloud infrastructure illustration"
            />
          </div>
        </div>

        <div className="hero-reference-strip">
          <article className="hero-reference-strip-card">
            <FaCloudUploadAlt />
            <h3>Cloud Migration</h3>
            <p>Seamless migration from on-prem to Azure with minimal downtime.</p>
            <span>Learn More</span>
          </article>
          <article className="hero-reference-strip-card">
            <FaServer />
            <h3>Azure Infrastructure</h3>
            <p>Design and build secure, resilient, and scalable cloud environments.</p>
            <span>Learn More</span>
          </article>
          <article className="hero-reference-strip-card">
            <FaShieldAlt />
            <h3>Security & Compliance</h3>
            <p>Protect your data and applications with enterprise-grade security.</p>
            <span>Learn More</span>
          </article>
          <article className="hero-reference-strip-card">
            <FaHeadset />
            <h3>Cloud Operations</h3>
            <p>24/7 monitoring, support, and optimization for peak performance.</p>
            <span>Learn More</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Hero;

