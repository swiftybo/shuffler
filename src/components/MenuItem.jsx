export default function MenuItem({ children }) {
  return (
    <li>
      <button className="menu__btn">{children}</button>
    </li>
  );
}
