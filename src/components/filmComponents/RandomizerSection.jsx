import { useState, useEffect } from "react"
import FilmItem from "./FilmItem"

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
        <>
            <div>Randomizer Section</div>
            {randomizedMovie && <FilmItem selectedFilm={randomizedMovie} />}
            <button onClick={() => setIsRandomizing(true)} disabled={isRandomizing}>Re-roll!</button>
        </>
        
    )
}