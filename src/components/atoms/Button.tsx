import React from "react";

import "./styles/button.scss";

export default function Button({ imdbId }: { imdbId: string }) {
  return (
    <a
      className="button"
      target="_blank"
      href={`https://www.imdb.com/title/${imdbId}/`}
    >
      Ver mais
    </a>
  );
}
