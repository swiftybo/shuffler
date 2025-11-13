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
      <section className="header__section section-right">
        <div></div>
      </section>
    </header>
  );
}
