import shufflerLogo from "../../assets/shuffler-logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <section className="navbar__section section-left">
        <img
          src={shufflerLogo}
          alt="Shuffler App Logo"
          className="navbar__img"
        />
        <h1 className="navbar__title oswald">
          <Link to="/">shuffler</Link>
        </h1>
      </section>
      <nav>
        <ul className="navbar__section section-right oswald">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Saved
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
