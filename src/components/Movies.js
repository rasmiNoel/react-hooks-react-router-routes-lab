import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        <ul key={index}>
          <li>Name: {movie.title}</li>
          <li>Time: {movie.time}</li>
          <li>Genres: {movie.genres}</li>
        </ul>
      })}
    </div>
  );
}

export default Movies;
