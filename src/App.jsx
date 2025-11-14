import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <section className="content">
        <div className="intro josefin-sans">
          <h1>What should we do today?</h1>
          <p className="intro__para">
            Let the Shuffler decide! Choose a category and let the shuffler pick
            the perfect option for you and your partner!
          </p>
        </div>
        <Menu />
      </section>
    </>
  );
}

export default App;
