import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../../actions/movies";
import { IMovieDetails } from "../../interfaces/movieDetails";
import "./styles/moviedetails.scss";
import Header from "../organisms/Header";
import Image from "../atoms/Image";
import Loading from "../atoms/Loading";
import Button from "../atoms/Button";

export default function Moviedetail() {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchMovieDetail(movieId);
      setMovieDetails(data);
      setIsLoading(false);
    };
    fetchMovie();
  }, []);

  return (
    <div className="landing__page">
      {isLoading ? (
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
