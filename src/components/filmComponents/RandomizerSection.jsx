import { useState, useEffect } from "react"
import classes from "./RandomizerSection.module.css"
import FilmItem from "./FilmItem"
import rerollIcon from "../../assets/reroll-icon.png"
import { useFilmContext } from "../../store/film-context"

export default function RandomizerSection() {
    const {fetchedFilms} = useFilmContext()

    const [isRandomizing, setIsRandomizing] = useState(true)
    // Saving the randomized movie in this new state causes the "mark as watched" button to not work as this is not connected to the fetchedFilms state. 
    const [randomizedMovieIndex, setRandomizedMovieIndex] = useState()

    function fetchRandomMovie() {
        const randomisedMovie = fetchedFilms[Math.floor(Math.random() * fetchedFilms.length)]
        setRandomizedMovieIndex(fetchedFilms.findIndex(film => film === randomisedMovie))
    }

    useEffect(() => {
        if (isRandomizing) {
            const randomizeInterval = setInterval(() => {
                fetchRandomMovie()
            }, 100)
        
            setTimeout(() => {
                clearInterval(randomizeInterval)
                setIsRandomizing(false)
            }, 1000)
        }
    }, [isRandomizing])

    return (
        <div className={classes.randomizerSection}>
            <p className={`${classes.randomizerSection__para}`}>Your randomized pick:</p>
            {/* TODO: Needs updating to reflect new state name */}
            {randomizedMovieIndex >= 0 && <FilmItem selectedFilm={fetchedFilms[randomizedMovieIndex]} mxwidth="70%"/>}
            <button className={classes.randomizerSection__button} onClick={() => setIsRandomizing(true)} disabled={isRandomizing}>
                <img className={classes.randomizerSection__buttonIcon}src={rerollIcon} alt="reroll button icon" />
                Re-roll
                </button>
        </div>
        
    )
}