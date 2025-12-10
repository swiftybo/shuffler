import { useState, useEffect } from "react"
import classes from "./RandomizerSection.module.css"
import FilmItem from "./FilmItem"
import rerollIcon from "../../assets/reroll-icon.png"

export default function RandomizerSection({allFilms}) {
    const [isRandomizing, setIsRandomizing] = useState(true)
    const [randomizedMovie, setRandomizedMovie] = useState()

    function fetchRandomMovie() {
        setRandomizedMovie(allFilms[Math.floor(Math.random() * allFilms.length)])
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
            {randomizedMovie && <FilmItem selectedFilm={randomizedMovie} mxwidth="50%"/>}
            <button className={classes.randomizerSection__button} onClick={() => setIsRandomizing(true)} disabled={isRandomizing}>
                <img className={classes.randomizerSection__buttonIcon}src={rerollIcon} alt="reroll button icon" />
                Re-roll
                </button>
        </div>
        
    )
}