export default function Image({
  path,
  classes = "",
}: {
  path: string;
  classes?: string;
}) {
  return (
    <img
      className={classes}
      src={`https://image.tmdb.org/t/p/w500/${path}`}
    ></img>
  );
}
