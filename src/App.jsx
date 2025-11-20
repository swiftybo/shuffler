import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";
import { MenuContext } from "./store/menu-context.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  // const [selectedCategory, setSelectedCategory] = useState("");

  // function onSelectCategory(event) {
  //   setSelectedCategory(event.target.value);
  // }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
