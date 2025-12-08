import ActionButtons from "../components/filmComponents/ActionButtons";
import FilmsViewerSection from "../components/filmComponents/FilmsViewerSection";
import WildcardSection from "../components/filmComponents/WildcardSection";
import CategoryHeader from "../components/generalComponents/CategoryHeader";
import { useFilmContext } from "../store/film-context";
import { useState, useEffect } from "react";
import { filmList } from "../filmsData";
import { fetchFilms } from "../httpRequests";

export default function FilmPage() {
  const {filmsVisible, wildcardVisible, randomizerVisible} = useFilmContext()

   // 1. Loading state: tell user that the app is currently fetching data
    const [isFetching, setIsFetching] = useState(false);
    // 2. Data state: storing the fetched data
    const [availableFilms, setAvailableFilms] = useState([]);
    // 3. Error state: state to show potential errors on the UI
    const [error, setError] = useState();
  
    useEffect(() => {
      setIsFetching(true);
      async function getAllFilms() {
        try {
          const films = await fetchFilms(filmList)
          setAvailableFilms(films)
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

  return (
    <main className="content">
      <CategoryHeader />
      <p>3 watched</p>
      <p>3 to watch</p>
      <ActionButtons />
      {wildcardVisible && <WildcardSection />}
      {filmsVisible && <FilmsViewerSection fetchingStatus={isFetching} allFilms={availableFilms} error={error} />}
    </main>
  );
}
