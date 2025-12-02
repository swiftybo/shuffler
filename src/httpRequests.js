import { filmList } from "./filmsData.js";

export async function fetchFilm() {
    const availableFilms = await Promise.all(
        filmList.map(async film => {
            const response = await fetch(`http://www.omdbapi.com/?t=${film.title}&apikey=6f14816c`);
            return response.json();
        })
    )
    return availableFilms   
    // if (!response.ok) {
    //     throw new Error("Failed to fetch film");
    // }

    // if (resData.Response !== "True") {
    //     throw new Error(
    //     "Could not find the film. Please check the spelling of the film title"
    //     );
    // }
}
