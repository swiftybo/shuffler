import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";
import { MenuContext } from "./store/menu-context.jsx";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  function onSelectCategory(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <Header />
      <MenuContext className="content">
        <div className="intro josefin-sans">
          <h1>What should we do today?</h1>
          <p className="intro__para">
            Let the Shuffler decide! Choose a category and let the shuffler pick
            the perfect option for you and your partner!
          </p>
        </div>
        <Menu />
      </MenuContext>
    </>
  );
}

export default App;
