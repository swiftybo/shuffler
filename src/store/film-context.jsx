import { createContext, useContext, useState } from "react";

const FilmContext = createContext()

export function FilmContextProvider({children}) {
    const [randomizerVisible, setRandomizerVisible] = useState(false)
    const [wildcardVisible, setWildcardVisible] = useState(false)
    const [filmsVisible, setFilmsVisible] = useState(false)

    function handleRandomizerVisibility() {
        setRandomizerVisible(prevState => !prevState)
        setWildcardVisible(false)
    }

    function handleWildcardVisibility() {
        setWildcardVisible(prevState => !prevState)
        setRandomizerVisible(false)
    }
    
    function handleFilmVisibility() {
        setFilmsVisible(prevState => !prevState)
    }
        
    return (
        <FilmContext.Provider value={{filmsVisible, wildcardVisible, randomizerVisible, handleFilmVisibility, handleWildcardVisibility, handleRandomizerVisibility}}>
            {children}
        </FilmContext.Provider>
    )
}

export function useFilmContext() {
    const context = useContext(FilmContext)

    if (context === undefined) {
        throw new Error("You used the FilmContext out of the FilmContext Provider")
    }

    return context
}