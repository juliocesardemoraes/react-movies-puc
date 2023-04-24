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
export const createUrlToFetch = (urlParam: string) => {
  const apiKeyValue = import.meta.env.VITE_TMDB_API_KEY;
  const apiKeyParam = `?api_key=${apiKeyValue}`;
  const mainUrl = "https://api.themoviedb.org/3/";

  return `${mainUrl}${urlParam}${apiKeyParam}`;
};
