import { Link } from "react-router-dom";

function Header({ onQuoteClick }) {
  return (
    <header className="navbar">
      
      <div className="nav-container">

        {/* LOGO + MICROSOFT PARTNER */}
<Link to="/" className="logo-wrapper">
  CloudAxis
</Link>

        <nav className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <button className="nav-cta" onClick={onQuoteClick}>
            Talk to a Cloud Expert
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Header;
