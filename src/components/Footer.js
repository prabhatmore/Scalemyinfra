import { useState } from "react";
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiCloud, FiShield, FiHeadphones, FiDatabase, FiMail, FiGlobe, FiMessageSquare } from "react-icons/fi";

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col footer-about">
            <h4>Infrabryte</h4>
            <p>
              From on-prem to Azure, we build, migrate, and operate secure cloud
              infrastructure that scales reliably without confusion,
              unnecessary complexity, or downtime.
            </p>
            <ul className="footer-highlights">
              <li>
                <span className="footer-list-icon" aria-hidden="true"><FiShield /></span>
                <span>Secure by Design</span>
              </li>
              <li>
                <span className="footer-list-icon" aria-hidden="true"><FiCloud /></span>
                <span>Built for Scale</span>
              </li>
              <li>
                <span className="footer-list-icon" aria-hidden="true"><FiHeadphones /></span>
                <span>Always Here Support</span>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-services">
            <h4>Services</h4>
            <ul className="footer-services-list">
              <li>
                <span className="footer-list-icon" aria-hidden="true"><FiCloud /></span>
                <span>Azure Cloud Migration (On-prem to Azure)</span>
              </li>
              <li>
                <span className="footer-list-icon" aria-hidden="true"><FiShield /></span>
                <span>Secure Azure Infrastructure Build</span>
              </li>
              <li>
                <span className="footer-list-icon" aria-hidden="true"><FiHeadphones /></span>
                <span>Cloud Operations & 24×7 Support</span>
              </li>
              <li>
                <span className="footer-list-icon" aria-hidden="true"><FiDatabase /></span>
                <span>Backup, DR & Business Continuity</span>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Let's Connect</h4>
            <p className="footer-contact-item">
              <span className="footer-list-icon" aria-hidden="true"><FiMessageSquare /></span>
              <span>Let's discuss your Azure journey</span>
            </p>
            <p className="footer-contact-item">
              <span className="footer-list-icon" aria-hidden="true"><FiMail /></span>
              <span>Email: contact@infrabryte.com</span>
            </p>
            <p className="footer-contact-item">
              <span className="footer-list-icon" aria-hidden="true"><FiGlobe /></span>
              <span>Remote Services - Global</span>
            </p>

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

            <button className="footer-link" onClick={() => setShowPrivacy(true)}>
              Privacy Statement
            </button>

            <button className="footer-link" onClick={() => setShowTerms(true)}>
              Terms & Conditions
            </button>

            <button className="footer-link" onClick={() => setShowCode(true)}>
              Code of Business Conduct
            </button>

            <span>© 2026 Infrabryte. All rights reserved.</span>
          </div>
        </div>

      </footer> {/* ✅ FIXED: footer properly closed */}

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

      {/* Terms Modal */}
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

      {/* Code Modal */}
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