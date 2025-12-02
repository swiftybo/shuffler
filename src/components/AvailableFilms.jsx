import { useState, useEffect } from "react";

export default function AvailableFilms() {
  // 1. Loading state: tell user that the app is currently fetching data
  const [isFetching, setIsFetching] = useState(false);
  // 2. Data state: storing the fetched data
  const [availablePlaces, setAvailablePlaces] = useState();
  // 3. Error state: state to show potential errors on the UI
  const [error, setError] = useState();

  useEffect(() => {
    setIsFetching(true);
    async function fetchFilms() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?t=Memento&apikey=6f14816c`
        );

        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch film");
        }

        if (resData.Response !== "True") {
          throw new Error(
            "Could not find the film. Please check the spelling of the film title"
          );
        }

        console.log(resData);
        console.log(response);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        // setError({
        //   message:
        //     error.message || "Could not fetch films, please try again later.",
        // });
        setIsFetching(false);
      }
    }
    fetchFilms();
  }, []);

  return <>{isFetching && <p>Fetching films</p>}</>;
}
