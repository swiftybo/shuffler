import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="intro josefin-sans">
        <h1>What should we do today?</h1>
        <p className="intro__para">
          Let the Shuffler decide! Choose a category and let the shuffler pick
          the perfect option for you and your partner!
        </p>
      </div>
      <Menu />
    </>
  );
}
