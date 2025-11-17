import { useContext } from "react";
import { MenuContext } from "../store/menu-context";

export default function MenuItem({ children }) {
  const menuCtx = useContext(MenuContext);

  return (
    <>
      <button className="menu__btn">{children}</button>;
    </>
  );
}
