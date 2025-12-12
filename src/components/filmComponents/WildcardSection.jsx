import { useState, useActionState, useEffect } from "react"
import { fetchFilmID, fetchRecommendedFilm } from "../../httpRequests.js"
import classes from "./WildCardSection.module.css"
import infoIcon from "../../assets/information-icon.png"
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
    const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(false)

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
        <div className={classes.wildcardSection}>
            <form action={formAction} className={classes.form} >
                <h3 className={classes.form__title}>Give me an idea of the type of film you're feeling like...</h3>
                <section className={classes.form__inputSection}>
                    <div className={classes.form__field}>
                        <label className={classes.form__label} name="movieTitle">Movie Title:</label>
                        <input size="27" className={classes.form__input} name="movieTitle" type="text" defaultValue={formState.userMovieTitle} required/>
                    </div>
                    <div className={classes.form__field}>
                        <label className={classes.form__label} name="movieYear">Year of Release:<img className={classes.form__infoIcon} src={infoIcon} onMouseEnter={() => setIsInfoBoxVisible(true)} onMouseLeave={() => setIsInfoBoxVisible(false)}/></label>
                        {isInfoBoxVisible && <div className={classes.form__infoBox}>Providing a year will help in identifying the movie you are thinking about!</div>}
                        <input size="16" className={classes.form__input} name="movieYear" type="text" defaultValue={formState.userMovieYear}/>
                    </div>
                    <button className={classes.form__btn}>🔎Search </button>
                </section>
            </form>

            {currentOperation === "identifying" && <section className={classes.identifiedMovie}>
                {identifiedMovies.length > 1 && <p className={classes.identifiedMovie__warning}>Multiple movies with the name "{formState.userMovieTitle}" have been found. Please select the correct one so we can generate the best recommendation for you!</p>}
                <div className={classes.identifiedMovie__summary}>
                    <img src={`https://image.tmdb.org/t/p/w185${identifiedMovies[identifiedMovieIndex].poster_path}`} alt={`${identifiedMovies[identifiedMovieIndex].original_title} movie poster`} />
                    <div className={classes.identifiedMovie__details}>
                        <h2 style={{fontFamily: "Arial, Helvetica, sans-serif"}}>{identifiedMovies[identifiedMovieIndex].original_title}</h2>
                        <p><strong>Summary:</strong> {identifiedMovies[identifiedMovieIndex].overview}</p>
                        <p><strong>Release Date:</strong> {identifiedMovies[identifiedMovieIndex].release_date}</p>
                    </div>
                </div>
                <div className={classes.identifiedMovie__buttons}>
                    <button className={`${classes.identifiedMovie__btn} ${classes.identifiedMovie__reject}`} onClick={() => setIdentifiedMovieIndex(prevValue => prevValue - 1)} disabled={identifiedMovieIndex === 0}>⬅️ Previous Movie</button>
                    <button className={`${classes.identifiedMovie__btn} ${classes.identifiedMovie__confirm}`} onClick={confirmUserMovie}>Confirm</button>
                    <button className={`${classes.identifiedMovie__btn} ${classes.identifiedMovie__reject}`} onClick={() => setIdentifiedMovieIndex(prevValue => prevValue + 1)} disabled={identifiedMovieIndex === identifiedMovies.length -1}>Next Movie ➡️</button>
                </div>
            </section>}

            {currentOperation === "suggesting" && <section className={classes.suggestedMovie}>
                <div className={classes.suggestedMovie__summary}>
                    <img src={`https://image.tmdb.org/t/p/w185${suggestedMovies[suggestedMovieIndex].poster_path}`} />
                    <div className={classes.suggestedMovie__details}>
                        <h2 style={{fontFamily: "Arial, Helvetica, sans-serif"}}>{suggestedMovies[suggestedMovieIndex].original_title}</h2>
                        <p><strong>Summary:</strong> {suggestedMovies[suggestedMovieIndex].overview}</p>
                        <p><strong>Release Date:</strong> {suggestedMovies[suggestedMovieIndex].release_date}</p>
                    </div>
                </div>
                <div className={classes.wildcardMovie__buttons}>
                    <button className={classes.wildcardMovie__rejectBtn} onClick={() => setSuggestedMovieIndex(prevValue => prevValue - 1)} disabled={suggestedMovieIndex === 0}>⬅️ Previous Movie</button>
                    <button className={classes.wildcardMovie__confirmBtn} onClick={() => {console.log(`You've chosen ${suggestedMovies[suggestedMovieIndex].original_title}`)}}>Confirm ✅</button>
                    <button className={classes.wildcardMovie__rejectBtn} onClick={() => setSuggestedMovieIndex(prevValue => prevValue + 1)} disabled={suggestedMovieIndex === suggestedMovies.length -1}>Next Movie ➡️</button>
                </div>
            </section>}
        </div>
    )
}