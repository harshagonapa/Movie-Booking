// pages/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { name } = useParams();
  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState({});

  useEffect(() => {
    axios.get(`/api/movie/${name}`)
      .then(response => {
        setMovie(response.data);
        setSeats(response.data.seatsAvailable);
      })
      .catch(error => console.error('Error fetching movie details', error));
  }, [name]);

  const handleBooking = (time, count) => {
    // Implement seat booking logic
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.name}</h2>
      <img src={movie.imageUrl} alt={movie.name} />
      <p>{movie.theaterName}</p>
      <div>
        {Object.keys(seats).map(time => (
          <div key={time}>
            <button style={{ background: seats[time] > 10 ? 'green' : seats[time] > 5 ? 'yellow' : 'red' }}>
              {time} - {seats[time]} seats
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;
