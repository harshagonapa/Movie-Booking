// src/components/TheaterSelection.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Define all movie data here or import it from a central location
const moviesData = [
  {
    id: 1,
    title: 'Devara',
    languages: ['Hindi', 'Telugu'],
    theaterName: ['INOX Varun Beach', 'STBL Cine World'],
    image: 'https://cdn.gulte.com/wp-content/uploads/2023/05/Devara-First-Look-scaled.jpeg',
  },
  {
    id: 2,
    title: 'Saripodhaa Sanivaaram',
    languages: ['Hindi', 'Telugu'],
    theaterName: ['INOX Varun Beach', 'STBL Cine World'],
    image: 'https://gallery.123telugu.com/content/slideshows/2024/7/Saripodhaa-Sanivaaram-4/images/image.jpg',
  },
  {
    id: 3,
    title: 'Salaar Part_1',
    languages: ['Hindi', 'Telugu'],
    theaterName: ['INOX Varun Beach', 'STBL Cine World'],
    image: 'https://moviegalleri.net/wp-content/uploads/2020/12/Actor-Prabhas-SALAAR-Movie-First-Look-Poster-HD.jpg',
  },
  {
    id: 4,
    title: 'Martin',
    languages: ['Telugu'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://static.toiimg.com/photo/msid-90793886/90793886.jpg?12866',
  },
  {
    id: 5,
    title: 'Mechanic Rocky',
    languages: ['Telugu'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/07/mechanic-rocky-212x300.jpg',
  },
  {
    id: 6,
    title: 'Vettaiyan',
    languages: ['Telugu', 'Hindi'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://m.media-amazon.com/images/M/MV5BMmJlYTAwNzMtNDZkMy00ZTQ1LTk4NWYtM2QwM2JiOTBiZTBkXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 7,
    title: 'They Call Him OG',
    languages: ['Telugu'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d31eaa180297099.6508904b9e1a5.jpg',
  },
  {
    id: 8,
    title: 'Pushpa: The Rule',
    languages: ['Telugu', 'Hindi'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/826e9f156802275.636d3f5dcfbe9.png',
  },
  {
    id: 9,
    title: 'Venom',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg',
  },
  {
    id: 10,
    title: 'F1',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://assets-prd.ignimgs.com/2024/07/05/grucnljb0aesmvu-1720191699270.jpeg',
  },
  {
    id: 11,
    title: 'Mufasa: The Lion King',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://ik.imagekit.io/9ifn2ouyo26/movies/mufasa-the-lion-king/mufasa-the-lion-king-poster.jpg',
  },
  {
    id: 12,
    title: 'Joker: Folie a Deux',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: 'https://all.web.img.acsta.net/img/35/d4/35d40848cf2170d7a4b97c4c0140e054.jpg/r_2500_x',
  },
];

const TheaterSelection = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  // Find the selected movie based on the movieId
  const selectedMovie = moviesData.find(movie => movie.id === parseInt(movieId));

  // Handle the case where the movie is not found
  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  const handleTheaterClick = (theater) => {
    navigate(`/seats/${movieId}`, { state: { theater, movie: selectedMovie } });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${selectedMovie.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1>{selectedMovie.title}</h1>
      <h2 style={{ fontSize: '24px' }}>Select a Theater</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {selectedMovie.theaterName.map((theater, index) => (
          <button
            key={index}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '15px 30px',
              margin: '10px',
              fontSize: '20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => handleTheaterClick(theater)}
          >
            {theater}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TheaterSelection;
