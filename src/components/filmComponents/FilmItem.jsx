import classes from "./FilmItem.module.css"

export default function FilmItem({selectedFilm, mxwidth="22vw"}) {
    return (
        <div className={classes.filmItem} style={{maxWidth: `${mxwidth}`}}>
            <img className={classes.filmItem__img} src={selectedFilm.Poster} alt={`${selectedFilm.Title} poster`}></img>
            <div className={classes.filmItem__details}>
                <h3 className={`oswald ${classes.filmItem__title}`}>{selectedFilm.Title}</h3>
                <div className={classes.filmItem__genreList}>
                    {selectedFilm.Genre.split(",").map(genre => { return (
                        <div className={classes.filmItem__genre}>{genre}</div>
                    )
                    })}
                </div>
                <div className={classes.filmItem__ageRating}>{selectedFilm.Rated}</div>
                <div className={classes.filmItem__keyTimes}>
                    <p className={classes.filmItem__para}>🕒 {selectedFilm.Runtime}</p>
                    <p className={classes.filmItem__para}>📅 {selectedFilm.Year}</p>
                </div>
                <p><strong>Directed by:</strong> {selectedFilm.Director}</p>
            </div>
        </div>
    )
}