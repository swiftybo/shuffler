import { Fragment } from "react";

export default function MenuItem({ title, children, ...props }) {
  return (
    <div className="menuItem">
      <button className="menuItem__btn">
        <img src="../assets/film-icon.png" alt="logo" />
        <h2>{title}</h2>
        <p>{children}</p>
      </button>
    </div>
  );
}
