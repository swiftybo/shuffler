import { createContext, useContext, useState } from "react";

const FilmContext = createContext()

export function FilmContextProvider({children}) {
    const [filmsVisible, setFilmsVisible] = useState(false)
    const [wildcardVisible, setWildcardVisible] = useState(false)

    function handleFilmVisibility() {
        setFilmsVisible(prevState => !prevState)
    }

    return (
        <FilmContext.Provider value={{filmsVisible, handleFilmVisibility}}>
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