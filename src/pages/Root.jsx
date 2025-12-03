import { Outlet } from "react-router-dom";
import NavBar from "../components/homeComponents/NavBar.jsx";

export default function RootPage() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
