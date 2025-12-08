import { useState, useReducer } from "react"
import { fetchFilmID } from "../../httpRequests.js"
import classes from "./WildCardSection.module.css"
import FilmItem from "./FilmItem.jsx"

export default function WildcardSection() {
    const [userMovieTitle, setUserMovieTitle] = useState("")
    const [userMovieYear, setUserMovieYear] = useState("")
    const [identifiedMovies, setIdentifiedMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState(0)
    const [confirmedMovieID, setConfirmedMovieID] = useState()

    async function findUserMovie() {
        const {results} = await fetchFilmID(userMovieTitle, userMovieYear)
        setIdentifiedMovies([...results])
        setMovieIndex(0)
        console.log(results)
    }

    return (
        <>
            <div>
                <h4>Give me an idea of the type of film you're feeling like...</h4>
                <label name="movieTitle">Movie Title:</label>
                <input value={userMovieTitle} onChange={(e) => setUserMovieTitle(e.target.value)}/>
                <label name="movieYear">Year of Release:</label>
                <input value={userMovieYear} onChange={(e) => setUserMovieYear(e.target.value)} />
                <button onClick={findUserMovie}>Go!</button>
            </div>
            {identifiedMovies.length > 0 && <section>
                <div className={classes.wildcardMovie}>
                    <img src={`https://image.tmdb.org/t/p/w185${identifiedMovies[movieIndex].poster_path}`} />
                    <div className={classes.wildcardMovie__summary}>
                        <h2>{identifiedMovies[movieIndex].original_title}</h2>
                        <p>Summary: {identifiedMovies[movieIndex].overview}</p>
                        <p>Release Date: {identifiedMovies[movieIndex].release_date}</p>
                    </div>
                </div>
                {movieIndex > 0 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setMovieIndex(prevValue => prevValue - 1)}>Previous Movie</button>}
                <button className={classes.wildcardMovie__confirmBtn} onClick={() => setConfirmedMovieID(identifiedMovies[movieIndex].id)}>Confirm</button>
                {movieIndex < identifiedMovies.length -1 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setMovieIndex(prevValue => prevValue + 1)}>Next Movie</button>}
            </section>}
        </>
    )
}