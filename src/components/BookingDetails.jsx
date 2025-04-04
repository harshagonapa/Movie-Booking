// // src/components/BookingDetails.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const BookingDetails = () => {
//   const { state } = useLocation();
//   const { movieTitle, theater, showTime, seats, totalPrice, selectedDate } = state;

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Booking Details</h1>
//       <h2>Movie: {movieTitle}</h2>
//       <h3>Theater: {theater}</h3>
//       <h3>Show Time: {showTime}</h3>
//       <h3>Date: {selectedDate}</h3>
//       <h3>Selected Seats: {seats.join(', ')}</h3>
//       <h3>Total Price: ₹{totalPrice}</h3>
//       <h2 style={{ color: 'green' }}>Booking Successful!</h2>
//     </div>
//   );
// };

// export default BookingDetails;
