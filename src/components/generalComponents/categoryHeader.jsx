import filmLogo from "../../assets/film-logo.png"
import classes from "./CategoryHeader.module.css"

export default function CategoryHeader({films}) {
    return (
        <header className={classes.header}>
            <img className={classes.header__logo} src={filmLogo} alt="film logo"></img>
            <h2 className={`josefin-sans ${classes.header__title}`}>Films & Shows</h2>
            <p>{films.length} movies in your list</p>
        </header>
    )
}