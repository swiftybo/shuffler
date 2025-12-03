export async function fetchFilms(movieList) {
    const availableMovies = await Promise.all(
        movieList.map(async movie => {
            const response = await fetch(`http://www.omdbapi.com/?t=${movie.title}&apikey=6f14816c`);

            if (!response.ok) {
            throw new Error("Failed to fetch film");
            }

            return response.json();
        })
    )
    return availableMovies 
  
}
