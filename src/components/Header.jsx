import shufflerLogo from "../assets/shuffler-logo.png";

export default function Header() {
  return (
    <header className="header">
      <section className="header__section section-left">
        <img src={shufflerLogo} alt="Shuffler App Logo" />
        <h1>Shuffler</h1>
      </section>
      <section className="header__section section-right">
        <div></div>
      </section>
    </header>
  );
}
