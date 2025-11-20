import shufflerLogo from "../assets/shuffler-logo.png";

export default function NavBar() {
  return (
    <header className="navbar">
      <section className="navbar__section section-left">
        <img
          src={shufflerLogo}
          alt="Shuffler App Logo"
          className="navbar__img"
        />
        <h1 className="navbar__title oswald">shuffler</h1>
      </section>
      <nav>
        <ul className="navbar__section section-right oswald">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>History</a>
          </li>
          <li>
            <a>Saved</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
