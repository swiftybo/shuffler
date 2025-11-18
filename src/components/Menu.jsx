import MenuItem from "./MenuItem.jsx";
import filmLogo from "../assets/film-logo.png";
import restaurantLogo from "../assets/restaurant-logo.png";
import activityLogo from "../assets/activity-logo.png";
import cookingLogo from "../assets/cooking-logo.png";

export default function Menu() {
  return (
    <section className="menu">
      <MenuItem title="Films" logo={filmLogo}>
        Discover your next binge-watch or movie night pick.
      </MenuItem>
      <MenuItem title="Restaurants" logo={restaurantLogo}>
        Find the perfect spot to eat date night.
      </MenuItem>
      <MenuItem title="Activities" logo={activityLogo}>
        Explore fun things to do together.
      </MenuItem>
      <MenuItem title="Cook Together" logo={cookingLogo}>
        Cook something delicious together.
      </MenuItem>
    </section>
  );
}
