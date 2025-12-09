export default function MenuItem({ title, logo, buzzWords, children }) {
  return (
    <div className="menuItem">
      <img className="menuItem__logo" src={logo} alt={`${title} logo`} />
      <h3 className="menuItem__header">{title}</h3>
      <p className="menuItem__description josefin-sans">{children}</p>
      <section className="menuItem__buzzSection">
        {buzzWords.map((buzzWord) => (
          <div className="menuItem__buzzword">{buzzWord}</div>
        ))}
      </section>
    </div>
  );
}
