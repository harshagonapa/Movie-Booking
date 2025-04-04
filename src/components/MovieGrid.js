// src/components/MovieGrid.jsx
import React from 'react';
import './MovieGrid.css'; // Import the CSS file for styling

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h3>{movie.title}</h3>
          <p>{movie.languages.join(', ')}</p>
          <p>{movie.theaterName.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
