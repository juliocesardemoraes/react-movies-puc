import Item from "./Item";
import { IMovie } from "../../interfaces/movie";
import useFetchMovie from "../../customHooks/useFetchMovie";

export default function Movies() {
  const movies = useFetchMovie("movie/popular", true);

  return (
    <main>
      <h1 className="mb2">Filmes Populares</h1>
      <div className="movie__container flex g2">
        {movies?.map((item: IMovie) => {
          return <Item item={item} key={item.id}></Item>;
        })}
      </div>
    </main>
  );
}
