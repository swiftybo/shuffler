import MenuCategory from "./MenuCategory.jsx";

export default function MenuItem({ title, logo, buzzWords, children }) {
  return (
    <div className="menuItem">
      <img className="menuItem__logo" src={logo} alt="logo" />
      <h3>{title}</h3>
      <p className="menuItem__description josefin-sans">{children}</p>
      <section className="menuItem__buzzWords">
        {buzzWords.map((buzzWord) => (
          <MenuCategory buzzWord={buzzWord} />
        ))}
      </section>
    </div>
  );
}
