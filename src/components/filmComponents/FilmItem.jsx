import classes from "./FilmItem.module.css"

export default function FilmItem({selectedFilm}) {
    return (
        <div className={classes.filmItem}>
            <img className={classes.filmItem__img} src={selectedFilm.Poster} alt={`${selectedFilm.Title} poster`}></img>
            <h2 className={classes.filmItem__title}>{selectedFilm.Title}</h2>
            <div className={classes.filmItem__genre}>{selectedFilm.Genre}</div>
            <div className={classes.filmItem__ageRating}>{selectedFilm.Rated}</div>
            <p>🕒 {selectedFilm.Runtime}</p>
            <p>📅 {selectedFilm.Year}</p>
            <p>{selectedFilm.Director}</p>

        </div>
    )
}