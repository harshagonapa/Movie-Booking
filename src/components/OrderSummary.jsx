// src/components/OrderSummary.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from '../images/ordersummary.jpg'; // Importing the image from src/images

const OrderSummary = () => {
  const { state } = useLocation();
  const { movie, theater, time, seats, totalPrice } = state;

  const containerStyle = {
    padding: '20px',
    backgroundImage: `url(${backgroundImage})`, // Using the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const detailsStyle = {
    backgroundColor: 'rgba(1, 1, 1, 0.8)', // Black background with transparency
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    color: 'white', // Set text color to white
  };

  return (
    <div style={containerStyle}>
      <div style={detailsStyle}>
        <h1>Booking Summary</h1>
        <h2>Movie: {movie}</h2>
        <h3>Theater: {theater}</h3>
        <h3>Show Time: {time}</h3>
        <h3>Selected Seats: {seats.join(', ')}</h3>
        <h3>Total Price: ₹{totalPrice}</h3>
        <h2 style={{ color: 'green' }}>Booking Successful!</h2> {/* Booking successful in green */}
      </div>
    </div>
  );
};

export default OrderSummary;
