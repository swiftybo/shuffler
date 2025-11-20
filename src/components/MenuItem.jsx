export default function MenuItem({ title, logo, children, ...props }) {
  return (
    <div className="menuItem">
      <img className="menuItem__logo" src={logo} alt="logo" />
      <h3>{title}</h3>
      <p className="menuItem__description josefin-sans">{children}</p>
    </div>
  );
}
