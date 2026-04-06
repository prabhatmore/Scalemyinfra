import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo-link">
          <img src="/images/logo.png" alt="InfraBryte" className="logo-img" />
        </Link>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <nav className="nav-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          <Link to="/build-website" className="header-cta">
            🚀 Launch Your Website
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;