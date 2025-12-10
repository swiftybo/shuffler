import classes from "./FilmsViewerSection.module.css"
import FilmItem from "./FilmItem.jsx";
import { useFilmContext } from "../../store/film-context.jsx";

export default function FilmsViewerSection() {
  const {isFetching, fetchedFilms, error} = useFilmContext()
  
  return (
    <div className={classes.viewerSection}>
      <h2 className={`josefin-sans ${classes.viewerSection__subheader}`}>Your Films</h2>
      {isFetching && <p>Fetching films</p>}
      {!isFetching && <div className={classes.viewerSection__filmContent}>
        {fetchedFilms.map(film => (
          <FilmItem key={film.Title} selectedFilm={film}/>
        ))
      }</div>}
      {error && <p className={classes.viewerSection__error}>Error: {error.message}</p>}
    </div>
  )
}
