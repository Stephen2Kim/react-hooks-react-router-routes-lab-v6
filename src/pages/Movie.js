// src/pages/Movies.js
import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

// Example movies data
const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  // Add more movies if needed
];

function Movies() {
  return (
    <div>
      <NavBar /> {/* Add NavBar here */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
