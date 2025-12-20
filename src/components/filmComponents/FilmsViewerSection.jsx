import classes from "./FilmsViewerSection.module.css"
import FilmItem from "./FilmItem.jsx";
import { useFilmContext } from "../../store/film-context.jsx";
import { useState } from "react";

export default function FilmsViewerSection() {
  const {isFetching, fetchedFilms, error, watchedFilms, unwatchedFilms} = useFilmContext()
  const [activeMovieList, setActiveMovieList] = useState("all")

  return (
    <div className={classes.viewerSection}>
      <header className={classes.viewerSection__header}>
        <h2 className={`${classes.viewerSection__title}`}>Your Films</h2>
        <div className={classes.viewerSection__btnGroup}>
          <button onClick={() => setActiveMovieList("all")} className={`${activeMovieList === "all" && classes.activeBtn} ${classes.viewerSection__filterBtn}`}>All</button>
          <button onClick={() => setActiveMovieList("unwatched")} className={`${activeMovieList === "unwatched" && classes.activeBtn} ${classes.viewerSection__filterBtn}`}>To Watch</button>
          <button onClick={() => setActiveMovieList("watched")} className={`${activeMovieList === "watched" && classes.activeBtn} ${classes.viewerSection__filterBtn}`}>Watched</button>
        </div>
        {/* <button>Add Movie</button> */}
      </header>
      {isFetching && <p className={classes.viewerSection__fetchPara}>Fetching films...</p>}
      {!isFetching && fetchedFilms.length > 0 && <div className={classes.viewerSection__filmContent}>
        {activeMovieList === "all" && fetchedFilms.map(film => {
          if (film === undefined) {
            console.error("Error loading some movies")
            return
          } else {
            return <FilmItem key={film.Title} selectedFilm={film}/>
          }
        })
        
        }
        {activeMovieList === "unwatched" && unwatchedFilms.map(film => (
          <FilmItem key={film.Title} selectedFilm={film}/>
        ))
        }
        {activeMovieList === "watched" && watchedFilms.map(film => (
          <FilmItem key={film.Title} selectedFilm={film}/>
        ))
        }
      </div>}
      {error && <p className={classes.viewerSection__error}>Error: {error.message}</p>}
    </div>
  )
}
