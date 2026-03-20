import { Link } from "react-router-dom";

function Header({ onQuoteClick }) {
  return (
    <header className="navbar">
      
      <div className="nav-container">

        {/* LOGO */}
        <Link
          to="/"
          className="logo-link"
          title="We Build. You Scale."
        >
          <img src="/images/logo.png" alt="InfraBryte" className="logo-img" />
        </Link>




        <nav className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
