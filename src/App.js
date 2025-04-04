// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Routes from './Routes';
import devaraImage from './images/devara.jpeg'; // Importing the local image
import ssImage from './images/ss.jpg';
import salaarImage from './images/salaar.jpg';
import martinImage from './images/martin.jpg';
import mrImage from './images/mr.jpg';
import vettaiyanImage from './images/vettaiyan.jpg';
import ogImage from './images/og.jpg';
import pushpaImage from './images/pushpa.jpg';
import venomImage from './images/venom.jpg';
import f1Image from './images/f1.jpg';
import mufasaImage from './images/mufasa.jpg';
import jokerImage from './images/joker.jpg';

// Movies data
const moviesData = [
  {
    id: 1,
    title: 'Devara',
    languages: ['Hindi', 'Telugu'],
    theaterName: ['INOX Varun Beach', 'STBL Cine World'],
    image: devaraImage, // Using the imported local image
  },
  {
    id: 2,
    title: 'Saripodhaa Sanivaaram',
    languages: ['Hindi', 'Telugu'],
    theaterName: ['INOX Varun Beach', 'STBL Cine World'],
    image: ssImage,
  },
  {
    id: 3,
    title: 'Salaar Part_1',
    languages: ['Hindi', 'Telugu'],
    theaterName: ['INOX Varun Beach', 'STBL Cine World'],
    image: salaarImage,
  }, 
  {
    id: 4,
    title: 'Martin',
    languages: ['Telugu'],
    theaterName: ['INOX Varun Beach'],
    image: martinImage,
  },
  {
    id: 5,
    title: 'Mechanic Rocky',
    languages: ['Telugu'],
    theaterName: ['INOX Varun Beach'],
    image: mrImage,
  },
  {
    id: 6,
    title: 'Vettaiyan',
    languages: ['Telugu', 'Hindi'],
    theaterName: ['INOX Varun Beach'],
    image: vettaiyanImage,
  },
  {
    id: 7,
    title: 'They Call Him OG',
    languages: ['Telugu'],
    theaterName: ['INOX Varun Beach'],
    image: ogImage,
  },
  {
    id: 8,
    title: 'Pushpa: The Rule',
    languages: ['Telugu', 'Hindi'],
    theaterName: ['INOX Varun Beach'],
    image: pushpaImage,
  },
  {
    id: 9,
    title: 'Venom',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: venomImage,
  },
  {
    id: 10,
    title: 'F1',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: f1Image,
  },
  {
    id: 11,
    title: 'Mufasa: The Lion King',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: mufasaImage,
  },
  {
    id: 12,
    title: 'Joker: Folie a Deux',
    languages: ['English'],
    theaterName: ['INOX Varun Beach'],
    image: jokerImage,
  },
  
];

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  // Filter movies based on selected language and search term
  const filteredMovies = moviesData.filter((movie) => {
    const matchesLanguage = selectedLanguage === 'All' || movie.languages.includes(selectedLanguage);
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLanguage && matchesSearch;
  });

  return (
    <Router>
      <div className="App">
        <Navbar
          setSelectedLanguage={setSelectedLanguage}
          setSearchTerm={setSearchTerm}
          user={user}
          setUser={setUser}
        />
        <div className="content">
          <h2>Recommended Movies</h2>
          <Routes filteredMovies={filteredMovies} moviesData={moviesData} />
        </div>
      </div>
    </Router>
  );
}

export default App;
