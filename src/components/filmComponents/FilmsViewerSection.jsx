import classes from "./FilmsViewerSection.module.css"
import FilmItem from "./FilmItem.jsx";

export default function FilmsViewerSection({fetchingStatus, allFilms, error}) {
  return (
    <div className={classes.viewerSection}>
      <h2 className={`josefin-sans ${classes.viewerSection__subheader}`}>Your Films</h2>
      {fetchingStatus && <p>Fetching films</p>}
      {!fetchingStatus && <div className={classes.viewerSection__filmContent}>
        {allFilms.map(film => (
          <FilmItem key={film.Title} selectedFilm={film} />
        ))
      }</div>}
      {error && <p className={classes.viewerSection__error}>Error: {error.message}</p>}
    </div>
  )
}
