// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Adjust the import path as needed

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "The Imitation Game" },
  { id: 3, title: "Black Mass" },
  { id: 4, title: "Trolls" },
  { id: 5, title: "Friends with Benefits" },
  { id: 6, title: "The Social Network" },
  { id: 7, title: "Pitch Perfect" },
  { id: 8, title: "Into The Wood" },
  { id: 9, title: "Jack Reacher: Never Go Back" },
  { id: 10, title: "Mission Impossible 4" },
  { id: 11, title: "War of the Worlds" },
];

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
