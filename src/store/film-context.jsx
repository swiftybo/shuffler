import { createContext, useContext } from "react";

const FilmContext = createContext()

export function FilmContextProvider({children}) {
    return (
        <FilmContext.Provider>
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