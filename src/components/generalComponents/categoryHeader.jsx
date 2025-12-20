import filmLogo from "../../assets/film-logo.png"
import classes from "./CategoryHeader.module.css"
import { useFilmContext } from "../../store/film-context"

export default function CategoryHeader() {
    const {fetchedFilms, watchedFilms, unwatchedFilms, isFetching} = useFilmContext()

    // In scenario where film cannot be fetched, we do not want this unidentified movie to be part of the total film count
    const filmCount = fetchedFilms.filter(film => film !== undefined).length

    return (
        <header className={classes.header}>
            <img className={classes.header__logo} src={filmLogo} alt="film logo"></img>
            <h2 className={classes.header__title}>Films & Shows</h2>
            {isFetching && <p style={{fontSize: "1.1rem", color: "rgba(78, 78, 78)"}}>Fetching films...</p>}
            {!isFetching && <>
                <p style={{fontSize: "1.1rem", color: "rgba(78, 78, 78)"}}>{filmCount} films in your list</p>
                <div className={classes.header__statsSection}>
                    <p className={classes.header__stat}><span style={{color: "green"}}>✔ </span>{watchedFilms.length} watched</p>
                    <p className={classes.header__stat}><span>👀</span>{unwatchedFilms.length} to watch</p>
                </div>
            </>}
        </header>
    )
}