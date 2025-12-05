import FilmsViewerSection from "./components/filmComponents/FilmsViewerSection";

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
    console.log(availableMovies)
    return availableMovies 
  
}

export async function fetchFilmID(movieTitle) {
    
//     const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTkwYzhlNmI2MTUzOGY2MzMwOTU1ZjY5Y2I2MmVkYSIsIm5iZiI6MTc2NDg0ODIzMC4zNjgsInN1YiI6IjY5MzE3MjY2NjI3ZDU4OTVmM2Y1YmE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cr23RiQKh_eUR3hG9Sa5xEDkCE2da6h4o0CN3Maqngg'
//   }
// };

// fetch('https://api.themoviedb.org/3/search/movie?query=jaws&include_adult=false&language=en-US&page=1', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
    
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTkwYzhlNmI2MTUzOGY2MzMwOTU1ZjY5Y2I2MmVkYSIsIm5iZiI6MTc2NDg0ODIzMC4zNjgsInN1YiI6IjY5MzE3MjY2NjI3ZDU4OTVmM2Y1YmE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cr23RiQKh_eUR3hG9Sa5xEDkCE2da6h4o0CN3Maqngg'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`, options)
    const movie = await response.json()
    console.log(movie)
}
