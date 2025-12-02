import { useState, useEffect } from "react";
import { fetchFilm } from "../httpRequests.js";

export default function AvailableFilms() {
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
        const films = await fetchFilm()
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
  }, []);

  return <>{isFetching && <p>Fetching films</p>}</>;
}
