import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return (
          <ul key={index}>
            <li>Name: {actor.name}</li>
            <li>Movies: {actor.movies}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default Actors;
