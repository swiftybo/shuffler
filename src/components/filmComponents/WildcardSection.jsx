import { useState, useActionState, useEffect } from "react"
import { fetchFilmID, fetchRecommendedFilm } from "../../httpRequests.js"
import classes from "./WildCardSection.module.css"
import infoIcon from "../../assets/information-icon.png"
import FilmSelector from "./FilmSelector.jsx"
const initialState = {userMovieTitle: "", userMovieYear: ""}

export default function WildcardSection() {
    function updateUserMovie(prevFormState, FormData) {
        return {userMovieTitle: FormData.get("movieTitle"), userMovieYear: FormData.get("movieYear")}
    }

    const [formState, formAction] = useActionState(updateUserMovie, initialState)

    // state to record if either identifying movies or suggesting movies 
    const [currentOperation, setCurrentOperation] = useState("")

    // Loading state (identified movies): state to tell the user that the app is currently fetching the identified movie(s)
    const [isFetchingIdentifiedMovie, setIsFetchingIdentifiedMovie] = useState(false)
    // Data state (identified movies): state to save the current identified movies based on the user's inputs
    const [identifiedMovies, setIdentifiedMovies] = useState([])
    const [identifiedMovieIndex, setIdentifiedMovieIndex] = useState(0)
    // Error state (identified movies): state to show potential errors on the UI
    const [identifiedMoviesError, setIdentifiedMoviesError] = useState()


    // Loading state (identified movies): state to tell the user that the app is currently fetching the recommended movie(s)
    const [isFetchingRecommendedMovies, setIsFetchingRecommendedMovies] = useState(false)
    // Data state (suffested moveis): state to save the current suggested movies based on the user's inputs
    const [recommendedMovie, setRecommendedMovie] = useState([])
    const [recommendedMovieIndex, setRecommendedMovieIndex] = useState(0)
    const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(false)

    useEffect(() => {
        // Conditional check added here
        if (formState.userMovieTitle === "" && formState.userMovieYear === "") {
            // Exit early if both are empty (i.e., on initial mount)
            return; 
        }

        async function findUserMovie() {
            try {
                setIsFetchingIdentifiedMovie(true)
                const {results} = await fetchFilmID(formState.userMovieTitle, formState.userMovieYear)
                
                if (results.length === 0) {
                    throw new Error(`Could not find any films with the title "${formState.userMovieTitle}". Please check your spelling of the film or suggest a different film.`)
                }
                setIsFetchingIdentifiedMovie(false)
                setIdentifiedMovies([...results])
                setIdentifiedMoviesError()
                setIdentifiedMovieIndex(0)
            }
            catch (error) {
                setIdentifiedMoviesError({message: error.message || "Could not find your film!"})
                setIsFetchingIdentifiedMovie(false)
                setIdentifiedMovies([])
            }
        }
    findUserMovie()}
    ,[formState.userMovieTitle, formState.userMovieYear])

    async function confirmUserMovie() {
        const {results} = await fetchRecommendedFilm(identifiedMovies[identifiedMovieIndex].id)
        setRecommendedMovie([...results])
        setRecommendedMovieIndex(0) 
        setCurrentOperation("suggesting")
    }

    function handleIdentifiedMovieIndex(change) {
        if (change === "increment") {
            setIdentifiedMovieIndex(prevValue => prevValue + 1)
        } else if (change === "decrement") {
            setIdentifiedMovieIndex(prevValue => prevValue - 1)
        }
    }

    function handleRecommendedMovieIndex(change) {
        if (change === "increment") {
            setRecommendedMovieIndex(prevValue => prevValue + 1)
        } else if (change === "decrement") {
            setRecommendedMovieIndex(prevValue => prevValue - 1)
        }
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

            {isFetchingIdentifiedMovie === true && <p>Fetching your suggested film</p>}
            {isFetchingIdentifiedMovie === false && identifiedMovies.length > 0 &&
            <>
                {identifiedMovies.length > 1 && <p className={classes.identifiedMovie__warning}>Multiple movies with the name "{formState.userMovieTitle}" have been found. Please select the correct one so we can generate the best recommendation for you!</p>}
                <FilmSelector movieList={identifiedMovies} movieIndex={identifiedMovieIndex} handleMovieIndex={handleIdentifiedMovieIndex} confirmMovie={confirmUserMovie}/>
            </>}
            {isFetchingIdentifiedMovie === false && identifiedMoviesError && 
            <>
                <p className={classes.identifiedMovie__error}>{identifiedMoviesError.message}</p>
            </>}

            {currentOperation === "suggesting" && 
            <>
                <p className={`josefin-sans ${classes.recommendedMovie__para}`}>Here are the recommended movies based on your suggestion: </p>
                <FilmSelector movieList={recommendedMovie} movieIndex={recommendedMovieIndex} handleMovieIndex={handleRecommendedMovieIndex} />
            </>}
        </div>
    )
}
            
 
    
