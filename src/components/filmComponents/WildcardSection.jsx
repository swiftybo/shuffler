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

    // state to record if either identifying movies or suggesting movies 
    const [currentOperation, setCurrentOperation] = useState("")

    // state to save the current identified movies based on the user's inputs
    const [identifiedMovies, setIdentifiedMovies] = useState([])
    const [identifiedMovieIndex, setIdentifiedMovieIndex] = useState(0)

    // state to save the current suggested movies based on the user's inputs
    const [suggestedMovies, setSuggestedMovies] = useState([])
    const [suggestedMovieIndex, setSuggestedMovieIndex] = useState(0)

    useEffect(() => {
        // Conditional check added here
        if (formState.userMovieTitle === "" && formState.userMovieYear === "") {
            // Exit early if both are empty (i.e., on initial mount)
            return; 
        }

        async function findUserMovie() {
            const {results} = await fetchFilmID(formState.userMovieTitle, formState.userMovieYear)
            setIdentifiedMovies([...results])
            setIdentifiedMovieIndex(0)
            setCurrentOperation("identifying")
            // console.log(results)
        }
    findUserMovie()}
    ,[formState.userMovieTitle, formState.userMovieYear])

    async function confirmUserMovie() {
        const {results} = await fetchRecommendedFilm(identifiedMovies[identifiedMovieIndex].id)
        setSuggestedMovies([...results])
        setSuggestedMovieIndex(0) 
        setCurrentOperation("suggesting")
        console.log(results)
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

            {currentOperation === "identifying" && <section className={classes.wildcardMovie}>
                {identifiedMovies.length > 1 && <p>Multiple movies with the name "{formState.userMovieTitle}" have been found. Please select the correct one so we can generate the best recommendation for you!</p>}
                <div className={classes.wildcardMovie__summary}>
                    <img src={`https://image.tmdb.org/t/p/w185${identifiedMovies[identifiedMovieIndex].poster_path}`} />
                    <div className={classes.wildcardMovie__details}>
                        <h2>{identifiedMovies[identifiedMovieIndex].original_title}</h2>
                        <p>Summary: {identifiedMovies[identifiedMovieIndex].overview}</p>
                        <p>Release Date: {identifiedMovies[identifiedMovieIndex].release_date}</p>
                    </div>
                </div>
                <div className={classes.wildcardMovie__buttons}>
                    {identifiedMovieIndex > 0 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setIdentifiedMovieIndex(prevValue => prevValue - 1)}>Previous Movie</button>}
                    <button className={classes.wildcardMovie__confirmBtn} onClick={confirmUserMovie}>Confirm</button>
                    {identifiedMovieIndex < identifiedMovies.length -1 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setIdentifiedMovieIndex(prevValue => prevValue + 1)}>Next Movie</button>}
                </div>
            </section>}

            {currentOperation === "suggesting" && <section className={classes.wildcardMovie}>
                <div className={classes.wildcardMovie__summary}>
                    <img src={`https://image.tmdb.org/t/p/w185${suggestedMovies[suggestedMovieIndex].poster_path}`} />
                    <div className={classes.wildcardMovie__details}>
                        <h2>{suggestedMovies[suggestedMovieIndex].original_title}</h2>
                        <p>Summary: {suggestedMovies[suggestedMovieIndex].overview}</p>
                        <p>Release Date: {suggestedMovies[suggestedMovieIndex].release_date}</p>
                    </div>
                </div>
                <div className={classes.wildcardMovie__buttons}>
                    {suggestedMovieIndex > 0 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setSuggestedMovieIndex(prevValue => prevValue - 1)}>Previous Movie</button>}
                    <button className={classes.wildcardMovie__confirmBtn} onClick={() => {console.log(`You've chosen ${suggestedMovies[suggestedMovieIndex].original_title}`)}}>Confirm</button>
                    {suggestedMovieIndex < suggestedMovies.length -1 && <button className={classes.wildcardMovie__rejectBtn} onClick={() => setSuggestedMovieIndex(prevValue => prevValue + 1)}>Next Movie</button>}
                </div>
            </section>}
        </>
    )
}