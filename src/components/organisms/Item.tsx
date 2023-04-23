import VoteComponent from "../atoms/vote";
import { IMovie } from "../../interfaces/movie";
import "./styles/item.scss";
import Image from "../atoms/Image";

export default function Item({ item }: { item: IMovie }) {
  return (
    <a href={`/movie/${item.id}`}>
      <div className="item__container">
        <VoteComponent voteAverage={item.vote_average}></VoteComponent>
        <Image path={item.poster_path}></Image>
        <div>{item.title}</div>
      </div>
    </a>
  );
}
