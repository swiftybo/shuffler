import { Fragment } from "react";

export default function MenuItem({ title, children, ...props }) {
  return (
    <button className="menuItem">
      <img src="../assets/film-icon.png" alt="logo" />
      <h2>{title}</h2>
      <p className="menuItem__description">{children}</p>
    </button>
  );
}
