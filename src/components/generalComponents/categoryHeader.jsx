import filmLogo from "../../assets/film-logo.png"
import classes from "./CategoryHeader.module.css"
import { useFilmContext } from "../../store/film-context"

export default function CategoryHeader() {
    const {fetchedFilms} = useFilmContext()

    return (
        <header className={classes.header}>
            <img className={classes.header__logo} src={filmLogo} alt="film logo"></img>
            <h2 className={`josefin-sans ${classes.header__title}`}>Films & Shows</h2>
            <p>{fetchedFilms.length} films in your list</p>
        </header>
    )
}