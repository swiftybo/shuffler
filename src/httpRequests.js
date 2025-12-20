const OPTIONS = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTkwYzhlNmI2MTUzOGY2MzMwOTU1ZjY5Y2I2MmVkYSIsIm5iZiI6MTc2NDg0ODIzMC4zNjgsInN1YiI6IjY5MzE3MjY2NjI3ZDU4OTVmM2Y1YmE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cr23RiQKh_eUR3hG9Sa5xEDkCE2da6h4o0CN3Maqngg'
        }
    };

export async function fetchFilms(movieList) {
    const availableMovies = await Promise.all(
        // change this to a reducer function so that if an error is thrown, then the error can be shown but the rest of movies is still completed without empty object in new array
        movieList.reduce(async (accumulator, currentMovie) => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?t=${currentMovie.title}&apikey=6f14816c`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch film with title ${currentMovie.title}`);
                }

                const movieInfo = await response.json()

                if (movieInfo.Response === "False") {
                    throw new Error(`Movie with title "${currentMovie.title}" not found!`)
                }

                // console.log({...movieInfo, watchStatus: currentMovie.watched})
                console.log(accumulator)
                return accumulator;
            }
            catch (error) {
                console.log(error)
                return accumulator
            }
        }, [])
    )
    console.log(availableMovies)
    return availableMovies 
}
        
        
//         movieList.map(async movie => {
//             try {
//                 const response = await fetch(`http://www.omdbapi.com/?t=${movie.title}&apikey=6f14816c`);
                
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch film with title ${movie.title}`);
//                 }
                
//                 const movieInfo = await response.json()

//                 if (movieInfo.Response === "False") {
//                     throw new Error(`Movie with title "${movie.title}" not found!`)
//                 }
    
//                 return {...movieInfo, watchStatus: movie.watched};
//             }
//             catch (error) {
//                 console.log(error)
//                 return
//             }
//         })
//     )
//     console.log(availableMovies)
//     return availableMovies 
// }

export async function fetchFilmID(movieTitle, movieYear) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US${movieYear ? `&primary_release_year=${movieYear}` : null}&page=1`, OPTIONS)
        return await response.json()
    }
    
    catch {

    }
}

export async function fetchRecommendedFilm(movieID) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?language=en-US&page=1`, OPTIONS)
    return await response.json()
}