import { Fragment } from "react";

export default function MenuItem({ title, logo, children, ...props }) {
  return (
    <button className="menuItem">
      <img className="menuItem__logo" src={logo} alt="logo" />
      <h2>{title}</h2>
      <p className="menuItem__description">{children}</p>
    </button>
  );
}
