// // src/components/MovieList.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const MovieList = ({ movies }) => {
//   const navigate = useNavigate();

//   const handleMovieClick = (movie) => {
//     navigate(`/theaters/${movie.id}`, { state: { movie } });
//   };

//   return (
//     <div className="movie-grid">
//       {movies.map((movie) => (
//         <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
//           <img src={movie.image} alt={movie.title} />
//           <h3>{movie.title}</h3>
//           <p>{movie.language}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;

// src/components/MovieList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/theaters/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.languages.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
