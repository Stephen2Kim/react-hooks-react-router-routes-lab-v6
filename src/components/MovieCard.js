// src/components/MovieCard.js
import React from 'react';

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
