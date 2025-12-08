import classes from "./FilmsViewerSection.module.css"
import FilmItem from "./FilmItem.jsx";

export default function FilmsViewerSection({fetchingStatus, allFilms, error}) {
  return (
    <>
      {fetchingStatus && <p>Fetching films</p>}
      {!fetchingStatus && <div className={classes.filmContent}>
        {allFilms.map(film => (
          <FilmItem key={film.Title} selectedFilm={film} />
        ))
      }</div>}
      {error && <p className={classes.error}>Error: {error.message}</p>}
    </>
  )
}
