import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import RootPage from "./pages/Root.jsx";
import History from "./pages/History.jsx";
import Saved from "./pages/Saved.jsx";
import ErrorPage from "./pages/Error.jsx";
import FilmPage from "./pages/FilmPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [{ path: "films", element: <FilmPage /> }],
      },
      { path: "history", element: <History /> },
      { path: "saved", element: <Saved /> },
    ],
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
