import classes from "./FilmSelector.module.css"

export default function FilmSelector( {movieList, movieIndex, handleMovieIndex, confirmMovie }) {
    return (
        <section className={classes.movie}>
            <div className={classes.movie__summary}>
                <img className={classes.movie__image} src={`https://image.tmdb.org/t/p/w185${movieList[movieIndex].poster_path}`} alt={`${movieList[movieIndex].original_title} movie poster`} />
                <div className={classes.movie__details}>
                    <h2 style={{fontFamily: "Arial, Helvetica, sans-serif"}}>{movieList[movieIndex].original_title}</h2>
                    <p><strong>Summary:</strong> {movieList[movieIndex].overview}</p>
                    <p><strong>Release Date:</strong> {movieList[movieIndex].release_date}</p>
                </div>
            </div>
            <div className={classes.movie__buttons}>
                <button className={`${classes.movie__btn} ${classes.movie__reject}`} onClick={() => handleMovieIndex("decrement")} disabled={movieIndex === 0}>⬅️ Previous Movie</button>
                <button className={`${classes.movie__btn} ${classes.movie__confirm}`} onClick={confirmMovie}>Confirm</button>
                <button className={`${classes.movie__btn} ${classes.movie__reject}`} onClick={() => handleMovieIndex("increment")} disabled={movieIndex === movieList.length -1}>Next Movie ➡️</button>
            </div>
        </section>
    )
}