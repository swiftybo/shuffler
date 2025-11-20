import Header from "../components/Header.jsx";
// import { MenuContext } from "../store/menu-context.jsx";
import { Menu } from "../components/Menu.jsx";

export default function HomePage() {
  return (
    <>
      <h1>This is the Home Page</h1>
      <Header />
      {/* <MenuContext className="content"> */}
      <div className="intro josefin-sans">
        <h1>What should we do today?</h1>
        <p className="intro__para">
          Let the Shuffler decide! Choose a category and let the shuffler pick
          the perfect option for you and your partner!
        </p>
      </div>
      <Menu />
      {/* </MenuContext> */}
    </>
  );
}
