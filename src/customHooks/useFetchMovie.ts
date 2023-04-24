import { useEffect, useState } from "react";
import { createUrlToFetch } from "../utils/movies";

/**
 * A custom hook function for fetching movies or a singular movie
 * @param url endpoint from tmdb you want to fetch from Ex: movie/popular
 * @param multipleMovies A boolean that determines if there are multiple movies
 * @returns a movie and if it's loading
 */
export default function useFetchMovie(url: string, multipleMovies = false) {
  const urlToFetchFrom = createUrlToFetch(url);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchPopularMoviesEffect = async () => {
      const response = await fetch(urlToFetchFrom);
      const data = await response.json();
      // If more than one movie return results
      const dataMultiple = multipleMovies === true ? data.results : data;
      setMovie(dataMultiple);
    };
    fetchPopularMoviesEffect();
  }, []);

  return movie;
}
