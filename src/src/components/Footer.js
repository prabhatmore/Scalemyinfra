import { useState } from "react";
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div>
            <h4>Infrabryte</h4>
            <p>
              From on-prem to Azure, we build, migrate, and operate secure cloud
              infrastructure that scales reliably without confusion,
              unnecessary complexity, or downtime.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>Azure Cloud Migration (On-prem to Azure)</li>
              <li>Secure Azure Infrastructure Build</li>
              <li>Cloud Operations & 24×7 Support</li>
              <li>Backup, DR & Business Continuity</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Let's Connect</h4>
            <p>📩 Let's discuss your Azure journey</p>
            <p>Email: contact@infrabryte.com</p>
            <p>Remote Services – Global</p>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Legal bar */}
        <div className="legal-footer">
          <div className="legal-container">
            <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>
              Privacy Statement
            </a>

            <a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>
              Terms & Conditions
            </a>

            <a href="#" onClick={(e) => { e.preventDefault(); setShowCode(true); }}>
              Code of Business Conduct
            </a>

            <span>© 2026 Infrabryte | All rights reserved</span>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowPrivacy(false)}>×</button>
            <h2>Privacy Statement</h2>

            <p>
              Infrabryte is committed to protecting the privacy and confidentiality
              of personal and business information collected through our website
              and services.
            </p>

            <p>
              Information is used solely for service delivery, security, and
              compliance purposes and is never sold or misused.
            </p>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowTerms(false)}>×</button>
            <h2>Terms & Conditions</h2>

            <p>
              By accessing or using Infrabryte’s website and services, you agree
              to comply with these Terms & Conditions.
            </p>

            <p>
              Services are provided on a best-effort basis. Infrabryte is not
              liable for indirect or consequential damages.
            </p>
          </div>
        </div>
      )}

      {/* Code of Business Conduct Modal */}
      {showCode && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowCode(false)}>×</button>
            <h2>Code of Business Conduct</h2>

            <p>
              Infrabryte is committed to conducting business with integrity,
              transparency, and ethical responsibility.
            </p>

            <p>
              All employees, partners, and contractors are expected to comply
              with applicable laws, avoid conflicts of interest, and uphold
              confidentiality and data security.
            </p>

            <p>
              Any form of bribery, corruption, or unethical behavior is strictly
              prohibited.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
