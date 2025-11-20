import { Link } from "react-router-dom";

import MenuItem from "./MenuItem.jsx";
import filmLogo from "../assets/film-logo.png";
import restaurantLogo from "../assets/restaurant-logo.png";
import activityLogo from "../assets/activity-logo.png";
import cookingLogo from "../assets/cooking-logo.png";

export default function Menu() {
  return (
    <section className="menu">
      <Link to="/history">
        <MenuItem
          title="Films"
          logo={filmLogo}
          categories={["Netflix", "Cinema"]}
        >
          Discover your next binge-watch or movie-night pick.
        </MenuItem>
      </Link>
      <MenuItem
        title="Restaurants"
        logo={restaurantLogo}
        categories={["Cuisine", "A la carte", "Buffet"]}
      >
        Find the perfect spot to eat date night.
      </MenuItem>
      <MenuItem
        title="Activities"
        logo={activityLogo}
        categories={["Indoor", "Outdoor", "Chill", "High-Adrenaline"]}
      >
        Explore fun things to do together.
      </MenuItem>
      <MenuItem
        title="Cook Together"
        logo={cookingLogo}
        categories={["Quick", "One-Pot", "Gourmet"]}
      >
        Cook something delicious together.
      </MenuItem>
    </section>
  );
}
