import { Link, useLocation } from "react-router-dom";
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const formatLabel = (text) =>
    text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            <span className="separator">›</span>
            {isLast ? (
              <span className="current">{formatLabel(value)}</span>
            ) : (
              <Link to={to}>{formatLabel(value)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
