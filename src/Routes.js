// src/Routes.js
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import TheaterSelection from './components/TheaterSelection';
import SeatSelection from './components/SeatSelection';
import OrderSummary from './components/OrderSummary';
import BookingDetails from './components/BookingDetails'; // Import the BookingDetails component

const AppRoutes = ({ filteredMovies, moviesData }) => {
  return (
    <Routes>
      <Route path="/" element={<MovieList movies={filteredMovies} />} />
      <Route path="/theaters/:movieId" element={<TheaterSelection moviesData={moviesData} />} />
      <Route path="/seats/:movieId" element={<SeatSelection />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/booking" element={<BookingDetails />} /> {/* Add this line for booking details */}
    </Routes>
  );
};

export default AppRoutes;
