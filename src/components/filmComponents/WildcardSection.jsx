import { useState } from "react"
import { fetchFilmID } from "../../httpRequests.js"
import FilmItem from "./FilmItem.jsx"

export default function WildcardSection() {
    const [userMovieTitle, setUserMovieTitle] = useState("")
    const [userMovieYear, setUserMovieYear] = useState("")
    const [identifiedMovies, setIdentifiedMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState(0)

    async function findUserMovie() {
        const {results} = await fetchFilmID(userMovieTitle, userMovieYear)
        setIdentifiedMovies([...results])
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
            <section>
                {identifiedMovies.length > 0 && 
                    <div>
                        <h2>{identifiedMovies[movieIndex].original_title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w185${identifiedMovies[movieIndex].poster_path}`} />
                    </div>}
            </section>
        </>
    )
}