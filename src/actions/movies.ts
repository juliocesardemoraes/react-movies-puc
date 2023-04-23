/*
    https://developers.themoviedb.org/3/movies/get-movie-details
    
    METHODS:
    /movie/popular
    /movie/{movie_id}
*/

/**
 * Create the url that will fetch the movies from TMDB
 * @param urlParam dinamic string for multiple different calls
 * @returns url for calling the api properly mounted
 */
const createUrlToFetch = (urlParam: string) => {
  const apiKeyValue = import.meta.env.VITE_TMDB_API_KEY;
  const apiKeyParam = `?api_key=${apiKeyValue}`;
  const mainUrl = "https://api.themoviedb.org/3/";

  return `${mainUrl}${urlParam}${apiKeyParam}`;
};

/**
 * Function that fetches popular movies
 * @returns 20 popular movies
 */
export async function fetchPopularMovies() {
  const url = createUrlToFetch("movie/popular");
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Function to get specific details of a movie
 * @param movieId movie Id
 * @returns details of a movie
 */
export async function fetchMovieDetail(movieId: string | undefined) {
  const url = createUrlToFetch(`movie/${movieId}`);
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
