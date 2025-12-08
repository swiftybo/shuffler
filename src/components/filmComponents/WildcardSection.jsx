import { useState, useActionState, useEffect } from "react"
import { fetchFilmID, fetchRecommendedFilm } from "../../httpRequests.js"
import classes from "./WildCardSection.module.css"
import FilmItem from "./FilmItem.jsx"
const initialState = {userMovieTitle: "", userMovieYear: ""}

export default function WildcardSection() {
    function updateUserMovie(prevFormState, FormData) {
        return {userMovieTitle: FormData.get("movieTitle"), userMovieYear: FormData.get("movieYear")}
    }

    const [formState, formAction] = useActionState(updateUserMovie, initialState)
    const [identifiedMovies, setIdentifiedMovies] = useState([])
    const [suggestedMovies, setSuggestedMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState(0)
    const [confirmedMovieID, setConfirmedMovieID] = useState()

    useEffect(() => {
        // Conditional check added here
        if (formState.userMovieTitle === "" && formState.userMovieYear === "") {
            // Exit early if both are empty (i.e., on initial mount)
            return; 
        }

        async function findUserMovie() {
            const {results} = await fetchFilmID(formState.userMovieTitle, formState.userMovieYear)
            setIdentifiedMovies([...results])
            setMovieIndex(0)
            console.log(results)
        }
    findUserMovie()}
    ,[formState.userMovieTitle, formState.userMovieYear])

    async function findRecommendedMovie() {
        const {results} = await fetchRecommendedFilm(confirmedMovieID)
        setSuggestedMovies([...results])
        setMovieIndex(0)
        console.log(results)
    }

    function confirmUserMovie() {
        setConfirmedMovieID(identifiedMovies[movieIndex].id)
        findRecommendedMovie()
    }

    return (
        <>
            <form action={formAction} >
                <h4>Give me an idea of the type of film you're feeling like...</h4>
                <label name="movieTitle">Movie Title:</label>
                <input name="movieTitle" type="text" defaultValue={formState.userMovieTitle}/>
                <label name="movieYear">Year of Release:</label>
                <input name="movieYear" type="text" defaultValue={formState.userMovieYear}/>
                <button>Go!</button>
            </form>
            {identifiedMovies.length > 0 && <section className={classes.wildcardMovie}>
                <p>Multiple movies with the name "{formState.userMovieTitle}" have been found. Please select the correct one so we can generate the best recommendation for you!</p>
                <div className={classes.wildcardMovie__summary}>
                    <img src={`https://image.tmdb.org/t/p/w185${identifiedMovies[movieIndex].poster_path}`} />
                    <div className={classes.wildcardMovie__details}>
                        <h2>{identifiedMovies[movieIndex].original_title}</h2>
                        <p>Summary: {identifiedMovies[movieIndex].overview}</p>
                        <p>Release Date: {identifiedMovies[movieIndex].release_date}</p>
                    </div>
                </div>
                <div className={classes.wildcardMovie__buttons}>
                    {movieIndex > 0 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setMovieIndex(prevValue => prevValue - 1)}>Previous Movie</button>}
                    <button className={classes.wildcardMovie__confirmBtn} onClick={confirmUserMovie}>Confirm</button>
                    {movieIndex < identifiedMovies.length -1 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setMovieIndex(prevValue => prevValue + 1)}>Next Movie</button>}
                </div>
            </section>}
        </>
    )
}