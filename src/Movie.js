import React from "react";
import { Counter } from "./Counter";

export function Movie({ name, poster, rating, description }) {
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-details">
        <h2>{name}</h2>
        <p>⭐{rating}</p>
      </div>
      <p>{description}</p>
      <Counter />
    </div>
  );
}
