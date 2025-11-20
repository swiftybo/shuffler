import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
