import shufflerLogo from "../assets/shuffler-logo.png";

export default function Header() {
  return (
    <header className="header">
      <section className="header__section section-left">
        <img
          src={shufflerLogo}
          alt="Shuffler App Logo"
          className="header__img"
        />
        <h1 className="header__title oswald">shuffler</h1>
      </section>
      <menu className="header__section section-right oswald">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>History</a>
        </li>
        <li>
          <a>Saved</a>
        </li>
      </menu>
    </header>
  );
}
