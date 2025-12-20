import { createContext, useContext, useState, useEffect } from "react";
import { fetchFilms } from "../httpRequests.js";
import filmList from "../data/film-data.js";

const FilmContext = createContext({})

export function FilmContextProvider({children}) {
    // STATE CONTROLLING VISIBILITY OF SECTIONS
    const [randomizerVisible, setRandomizerVisible] = useState(false)
    const [wildcardVisible, setWildcardVisible] = useState(false)
    const [filmsVisible, setFilmsVisible] = useState(false)
    // STATE CONTROLLING FETCH STATUS OF MOVIE DATA
    // 1. Loading state: tell user that the app is currently fetching data
    const [isFetching, setIsFetching] = useState(false);
    // 2. Data state: storing the fetched data
    const [fetchedFilms, setFetchedFilms] = useState([]);
    // 3. Error state: state to show potential errors on the UI
    const [error, setError] = useState();

    // Derived state to get the list of watched and unwatched films
    const watchedFilms = fetchedFilms.filter(film => film?.watchStatus === true)
    const unwatchedFilms = fetchedFilms.filter(film => film?.watchStatus === false)

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
    
    // USEEFFECT HOOK TO FETCH FILM DATA WHEN FILM PAGE OPENED
    useEffect(() => {
      setIsFetching(true);
      async function getAllFilms() {
        try {
          const films = await fetchFilms(filmList)
          setFetchedFilms(films)
          setIsFetching(false);
        } catch(error) {
          setError({
            message: error.message || "Could not fetch films, please try again later."
          })
          setIsFetching(false)
        }
      }
      getAllFilms()
    }, [filmList]);

    // FUNCTION TO TOGGLE THE WATCH STATUS OF A FILM
    function toggleWatchStatus(targetFilm) {
      setFetchedFilms(fetchedFilms.map(film => {
        if (film === targetFilm) {
          return {...film, watchStatus: !film.watchStatus}
        } else {
          return film
        }
      }))
    }

    return (
        <FilmContext.Provider value={{filmsVisible, wildcardVisible, randomizerVisible, isFetching, fetchedFilms, error, handleFilmVisibility, handleWildcardVisibility, handleRandomizerVisibility, toggleWatchStatus, watchedFilms, unwatchedFilms}}>
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