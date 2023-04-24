import { useParams } from "react-router-dom";
import "./styles/moviedetails.scss";
import Header from "../organisms/Header";
import Image from "../atoms/Image";
import Loading from "../atoms/Loading";
import Button from "../atoms/Button";
import useFetchMovie from "../../customHooks/useFetchMovie";
import { IMovieDetails } from "../../interfaces/movieDetails";

export default function Moviedetail() {
  const { movieId } = useParams();

  const movieDetails: IMovieDetails = useFetchMovie(`movie/${movieId}`);

  return (
    <div className="landing__page">
      {movieDetails?.length === 0 ? (
        <Loading></Loading>
      ) : (
        <>
          <Header></Header>
          <div className="movie__info">
            <Image
              path={movieDetails?.backdrop_path}
              classes="image__big"
            ></Image>
            <h1>{movieDetails?.title}</h1>
            <div className="grid__3">
              <h5>Orçamento: {movieDetails?.budget}$</h5>
              <h5>Quantidade de votos: {movieDetails?.vote_count}</h5>
              <h5>Media de votos: {movieDetails?.vote_average}</h5>
            </div>
            <Button imdbId={movieDetails?.imdb_id}></Button>
          </div>
        </>
      )}
    </div>
  );
}
