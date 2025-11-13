import shufflerLogo from "../assets/shuffler-logo.png";

export default function Header() {
  return (
    <header>
      <section>
        <img src={shufflerLogo} alt="Shuffler App Logo" />
        <h1>Shuffler</h1>
      </section>
    </header>
  );
}
