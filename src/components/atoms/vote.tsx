import styled from "styled-components";

const VoteColoredTitle = styled.h5`
  position: absolute;
  right: 0;
  border: ${(props) =>
    props.voteAverage > 6 ? "1px solid #fff" : "1px solid red"};
  color: "#fff";
  opacity: 0;
  transition: 1s all;
`;

export default function VoteComponent({
  voteAverage,
}: {
  voteAverage: number;
}) {
  return (
    <VoteColoredTitle voteAverage={voteAverage}>{voteAverage}</VoteColoredTitle>
  );
}
