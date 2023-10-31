import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => {
      return (
      <ul key={index}>
        <li>Name: {director.name}</li>
        <li>Movies: {director.movies}</li>
      </ul>
      )
    }
    )}
  </div>;
}

export default Directors;
