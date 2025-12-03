import filmLogo from "../../assets/film-logo.png"
import classes from "./CategoryHeader.module.css"

export default function CategoryHeader() {
    return (
        <header>
            <img className={classes.header__logo} src={filmLogo} alt="film logo"></img>
            <h2 className={classes.header__title}>Films & Shows</h2>
            <p>6 movies in your list</p>
        </header>
    )
}