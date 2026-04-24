import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiGrid, FiCpu, FiMail, FiNavigation, FiUsers } from "react-icons/fi";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO (display only, no navigation) */}
        <div className="logo-link" aria-label="InfraBryte logo">
          <img src="/images/logo.png" alt="InfraBryte" className="logo-img" />
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <nav className="nav-links">
            <Link to="/" className="nav-link-with-icon">
              <span className="nav-link-icon" aria-hidden="true">
                <FiHome />
              </span>
              <span>Home</span>
            </Link>
            <Link to="/about" className="nav-link-with-icon">
              <span className="nav-link-icon" aria-hidden="true">
                <FiUsers />
              </span>
              <span>About Us</span>
            </Link>
            <div className="nav-services-menu">
              <Link to="/services" className="nav-services-link">
                <span className="nav-link-icon" aria-hidden="true">
                  <FiGrid />
                </span>
                <span>Services</span>
                <span className="nav-services-caret" aria-hidden="true">▾</span>
              </Link>
              <div className="nav-services-dropdown">
                <Link to="/services/Tally-on-Cloud">Tally on Cloud</Link>
                <Link to="/services/application-hosting">Application Hosting on Cloud</Link>
                <Link to="/services/backup-recovery">Data Backup & Recovery</Link>
                <Link to="/services/virtual-desktop">Virtual Cloud Desktop</Link>
              </div>
            </div>
            <Link to="/solutions" className="nav-link-with-icon">
              <span className="nav-link-icon" aria-hidden="true">
                <FiCpu />
              </span>
              <span>Solutions</span>
            </Link>
            <Link to="/contact" className="nav-link-with-icon">
              <span className="nav-link-icon" aria-hidden="true">
                <FiMail />
              </span>
              <span>Contact Us</span>
            </Link>
          </nav>

          <Link to="/build-website" className="header-cta">
            <span className="header-cta-icon" aria-hidden="true">
              <FiNavigation />
            </span>
            <span>Launch Your Website</span>
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;