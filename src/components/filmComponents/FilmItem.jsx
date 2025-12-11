import classes from "./FilmItem.module.css"
import watchedTick from "../../assets/watched-tick2.png"
import { useFilmContext } from "../../store/film-context"

export default function FilmItem({selectedFilm}) {
    const {toggleWatchStatus} = useFilmContext()

    return (
        <div className={classes.filmItem}>
            {selectedFilm.watchStatus && <img src={watchedTick} className={classes.filmItem__watchedTick} />}
            <img className={classes.filmItem__img} src={selectedFilm.Poster} alt={`${selectedFilm.Title} poster`}></img>
            <div className={classes.filmItem__details}>
                <h3 className={`oswald ${classes.filmItem__title}`}>{selectedFilm.Title}</h3>
                <div className={classes.filmItem__genreList}>
                    {selectedFilm.Genre.split(",").map((genre, index) => { return (
                        <div key={index} className={classes.filmItem__genre}>{genre}</div>
                    )
                    })}
                </div>
                <div className={classes.filmItem__ageRating}>{selectedFilm.Rated}</div>
                <div className={classes.filmItem__keyTimes}>
                    <p className={classes.filmItem__para}>🕒 {selectedFilm.Runtime}</p>
                    <p className={classes.filmItem__para}>📅 {selectedFilm.Year}</p>
                </div>
                <p><strong>Directed by:</strong> {selectedFilm.Director}</p>
                <button onClick={() => toggleWatchStatus(selectedFilm)} className={`${classes.filmItem__watchBtn} ${selectedFilm.watchStatus ? `${classes.watched}` : `${classes.notWatched}`}`}>
                    {selectedFilm.watchStatus ? "✔ Watched" : "✔ Mark as watched"}
                </button>
            </div>
        </div>
    )
}