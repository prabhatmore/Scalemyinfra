import { Link } from "react-router-dom";

function Header({ onQuoteClick }) {
  return (
    <header className="navbar">
      
      <div className="nav-container">

        {/* LOGO + MICROSOFT PARTNER */}
<a
href="/"
  className="text-logo"
  title="We Build. You Scale."
>
  <span className="logo-scale">Infra</span>
  <span className="logo-my">bryte</span>
</a>




        <nav className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about">About Us</Link>
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
