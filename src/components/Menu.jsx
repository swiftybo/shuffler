import MenuItem from "./MenuItem.jsx";

export default function Menu() {
  return (
    <section className="menu">
      <MenuItem title="Films">
        Discover your next binge-wathc or movie night pick
      </MenuItem>
      <MenuItem title="Restaurants">
        Find the perfect spot to eat date night
      </MenuItem>
      <MenuItem title="Activities">Explore fun things to do together</MenuItem>
      <MenuItem title="Cook Together">
        Cook something delicious together
      </MenuItem>
    </section>
  );
}
