import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../actions/movies";
import Item from "./Item";
import { IMovie } from "../../interfaces/movie";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMoviesEffect = async () => {
      const data = await fetchPopularMovies();
      setMovies(data.results);
      return data;
    };
    fetchPopularMoviesEffect();
  }, []);

  return (
    <main>
      <h1 className="mb2">Filmes Populares</h1>
      <div className="movie__container flex g2">
        {movies.map((item: IMovie) => {
          return <Item item={item} key={item.id}></Item>;
        })}
      </div>
    </main>
  );
}
