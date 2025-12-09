import Menu from "../components/homeComponents/Menu.jsx";

export default function HomePage() {
  return (
    <>
      <div className="home josefin-sans">
        <h1 className="home__header">What should we do today?</h1>
        <p>
          Let the Shuffler decide! Choose a category and let the Shuffler pick
          the perfect option for you and your companions!
        </p>
        <Menu />
        <h2 className="home__subheader">Recent Picks</h2>
      </div>
    </>
  );
}
