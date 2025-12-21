import { Link } from "react-router-dom";

import MenuItem from "./MenuItem.jsx";
import filmLogo from "../../assets/film-logo.png";
import restaurantLogo from "../../assets/restaurant-logo.png";
import activityLogo from "../../assets/activity-logo.png";
import cookingLogo from "../../assets/cooking-logo.png";

export default function Menu() {
  return (
    <section className="menu">
      <Link to="/films">
        <MenuItem
          isComingSoon={false}
          key="films"
          title="Films"
          logo={filmLogo}
          buzzWords={["Netflix", "Cinema"]}
        >
          Discover your next binge-watch or movie-night pick.
        </MenuItem>
      </Link>
      <MenuItem
        isComingSoon={true}
        key="restaurants"
        title="Restaurants"
        logo={restaurantLogo}
        buzzWords={["Cuisine", "Buffet", "À la carte"]}
      >
        Find the perfect spot to eat on date night.
      </MenuItem>
      <MenuItem
        isComingSoon={true}
        key="activites"
        title="Activities"
        logo={activityLogo}
        buzzWords={["Outdoor", "Chill", "Active"]}
      >
        Explore fun things to do together.
      </MenuItem>
      <MenuItem
        isComingSoon={true}
        key="recipes"
        title="Cook Together"
        logo={cookingLogo}
        buzzWords={["One-Pot", "Gourmet", "Quick"]}
      >
        Cook something delicious together.
      </MenuItem>
    </section>
  );
}
