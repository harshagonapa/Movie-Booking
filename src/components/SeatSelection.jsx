// // src/components/SeatSelection.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// // Sample data for seat availability (you can replace this with actual data)
// const timingsData = [
//   { time: '10:00 AM', availableSeats: 100 },
//   { time: '1:00 PM', availableSeats: 50 },
//   { time: '4:00 PM', availableSeats: 20 },
//   { time: '7:00 PM', availableSeats: 0 },
// ];

// // Example seat layout (10 rows with increasing seats)
// const seatRows = [
//   { row: 'A', price: 75, seats: Array(8).fill(false) },  // 8 seats in row A
//   { row: 'B', price: 150, seats: Array(10).fill(false) }, // 10 seats in row B
//   { row: 'C', price: 150, seats: Array(12).fill(false) }, // 12 seats in row C
//   { row: 'D', price: 150, seats: Array(14).fill(false) }, // 14 seats in row D
//   { row: 'E', price: 200, seats: Array(16).fill(false) }, // 16 seats in row E
//   { row: 'F', price: 200, seats: Array(18).fill(false) }, // 18 seats in row F
//   { row: 'G', price: 200, seats: Array(20).fill(false) }, // 20 seats in row G
//   { row: 'H', price: 200, seats: Array(22).fill(false) }, // 22 seats in row H
//   { row: 'I', price: 200, seats: Array(22).fill(false) }, // 24 seats in row I
//   { row: 'J', price: 200, seats: Array(22).fill(false) }, // 26 seats in row J
// ];

// const SeatSelection = () => {
//   const { state } = useLocation();
//   const { theater, movie } = state;
//   const navigate = useNavigate();

//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seatCount, setSeatCount] = useState(0);
//   const [showSeatModal, setShowSeatModal] = useState(false);
//   const [showSeatMatrix, setShowSeatMatrix] = useState(false);
//   const [bookedSeats, setBookedSeats] = useState(new Set());
//   const [selectedDate, setSelectedDate] = useState(null); // State for selected date

//   // Generate random booked seats
//   const generateBookedSeats = () => {
//     const booked = new Set();
//     while (booked.size < 15) {
//       const rowIndex = Math.floor(Math.random() * seatRows.length);
//       const seatIndex = Math.floor(Math.random() * seatRows[rowIndex].seats.length);
//       booked.add(`${rowIndex}-${seatIndex}`);
//     }
//     return booked;
//   };

//   useEffect(() => {
//     setBookedSeats(generateBookedSeats());
//   }, [selectedTime]);

//   // Handle seat selection (limit to the number of seats chosen)
//   const handleSeatClick = (rowIndex, seatIndex) => {
//     const seatKey = `${rowIndex}-${seatIndex}`;
//     if (bookedSeats.has(seatKey)) {
//       alert("This seat is already booked.");
//       return;
//     }
//     if (selectedSeats.includes(seatKey)) {
//       // Deselect seat
//       setSelectedSeats(selectedSeats.filter(seat => seat !== seatKey));
//     } else {
//       if (selectedSeats.length >= seatCount) {
//         alert(`You can only book up to ${seatCount} seats.`);
//         return;
//       }
//       // Select seat
//       setSelectedSeats([...selectedSeats, seatKey]);
//     }
//   };

//   // Calculate total price
//   const totalPrice = selectedSeats.reduce((total, seat) => {
//     const [rowIndex] = seat.split('-').map(Number);
//     return total + seatRows[rowIndex].price;
//   }, 0);

//   const handleShowTimeClick = (timing) => {
//     // Reset state when a new show time is selected
//     setSelectedTime(timing.time);
//     setSelectedSeats([]); // Reset selected seats
//     setShowSeatMatrix(false); // Reset seat matrix visibility
//     setShowSeatModal(true); // Show seat count modal
//   };

//   const handleSeatCountSelect = (count) => {
//     setSeatCount(count);
//     setShowSeatModal(false);
//     setShowSeatMatrix(true);
//   };

//   // Generate date options starting from 21/10/2024
//   const generateDateOptions = () => {
//     const options = [];
//     const startDate = new Date('2024-10-21');
//     for (let i = 0; i < 5; i++) {
//       const date = new Date(startDate);
//       date.setDate(startDate.getDate() + i);
//       options.push(date.toLocaleDateString('en-GB')); // Format: DD/MM/YYYY
//     }
//     return options;
//   };

//   const handlePayClick = () => {
//     const seatNumbers = selectedSeats.map(seat => {
//       const [rowIndex, seatIndex] = seat.split('-').map(Number);
//       return `${seatRows[rowIndex].row}${seatIndex + 1}`; // Use row letter instead of index
//     });

//     // Navigate to the OrderSummary page with booking details
//     navigate('/order-summary', {
//       state: {
//         movie: movie.title,
//         theater,
//         time: selectedTime,
//         seats: seatNumbers,
//         totalPrice,
//       },
//     });
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>{movie.title} - {theater}</h1>

//       <h2>Select Show Date&Time</h2>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
//         <select
//           value={selectedDate || ''}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             marginBottom: '15px', // Add space between date select and timings
//           }}
//         >
//           <option value="" disabled>Select Date</option>
//           {generateDateOptions().map((date, index) => (
//             <option key={index} value={date}>{date}</option>
//           ))}
//         </select>
//         <div style={{ display: 'flex', gap: '15px' }}>
//           {timingsData.map((timing, index) => (
//             <button
//               key={index}
//               style={{
//                 backgroundColor: 'green', // Set to green
//                 color: 'white',
//                 padding: '10px 20px',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => handleShowTimeClick(timing)}
//             >
//               {timing.time}
//             </button>
//           ))}
//         </div>
//       </div>

//       {selectedTime && showSeatMatrix && (
//         <>
//           <h2>Seat Map - {selectedTime} on {selectedDate}</h2> {/* Display selected date */}
//           <p style={{ color: 'red' }}>Red seats are booked and cannot be selected.</p>

//           <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//             <div style={{
//               backgroundColor: '#ddd',
//               padding: '12px',
//               width: '325px', // Width set to match row A's seats (8 seats * 30px each)
//               display: 'inline-block',
//               textAlign: 'center',
//               position: 'relative',
//             }}>
//               <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
//                 SCREEN
//               </span>
//             </div>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
//             {seatRows.map((row, rowIndex) => (
//               <div key={row.row} style={{ display: 'flex', gap: '5px' }}>
//                 <span style={{ width: '50px', display: 'inline-block' }}>{row.row}</span>
//                 {row.seats.map((_, seatIndex) => {
//                   const seatKey = `${rowIndex}-${seatIndex}`;
//                   const isBooked = bookedSeats.has(seatKey);
//                   const isSelected = selectedSeats.includes(seatKey);
//                   return (
//                     <button
//                       key={seatIndex}
//                       onClick={() => handleSeatClick(rowIndex, seatIndex)}
//                       style={{
//                         width: '30px',
//                         height: '30px',
//                         backgroundColor: isSelected ? 'green' : (isBooked ? 'red' : 'white'),
//                         border: '1px solid black',
//                         cursor: isBooked ? 'not-allowed' : 'pointer',
//                       }}
//                       disabled={isBooked}
//                     >
//                       {seatIndex + 1}
//                     </button>
//                   );
//                 })}
//                 <span style={{ marginLeft: '10px' }}>₹{row.price}</span>
//               </div>
//             ))}
//           </div>

//           <h3>Total Selected Seats: {selectedSeats.length}</h3>
//           <h3>Total Price: ₹{totalPrice}</h3>

//           <button
//             onClick={handlePayClick}
//             style={{
//               backgroundColor: '#e81f36', // Set to specified color
//               color: 'white',
//               padding: '15px 30px', // Increased size of the button
//               border: 'none',
//               cursor: 'pointer',
//               marginTop: '20px',
//               fontSize: '18px', // Increased font size
//             }}
//           >
//             PAY ₹{totalPrice}
//           </button>
//         </>
//       )}

//       {showSeatModal && (
//         <div style={{
//           position: 'fixed',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           backgroundColor: 'white',
//           padding: '20px',
//           boxShadow: '0 0 10px rgba(0,0,0,0.5)',
//           zIndex: 1000,
//         }}>
//           <h2>How Many Seats?</h2>
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             {[1, 2, 3, 4, 5].map(count => (
//               <button key={count} onClick={() => handleSeatCountSelect(count)} style={{ margin: '10px', cursor: 'pointer' }}>
//                 {count === 1 && <span>🚴</span>}
//                 {count === 2 && <span>🛵</span>}
//                 {count === 3 && <span>🚗</span>}
//                 {count === 4 && <span>🚙</span>}
//                 {count === 5 && <span>🚘</span>}
//                 <span style={{ marginLeft: '10px' }}>{count} Seat{count > 1 ? 's' : ''}</span>
//               </button>
//             ))}
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <h3>Seat Prices</h3>
//             {seatRows.map((row, rowIndex) => (
//               <div key={row.row}>
//                 {row.row}: ₹{row.price}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeatSelection;



// src/components/SeatSelection.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const timingsData = [
  { time: '10:00 AM', availableSeats: 100 },
  { time: '1:00 PM', availableSeats: 50 },
  { time: '4:00 PM', availableSeats: 20 },
  { time: '7:00 PM', availableSeats: 10 },
];

const seatRows = [
  { row: 'A', price: 75, seats: Array(8).fill(false) },
  { row: 'B', price: 150, seats: Array(10).fill(false) },
  { row: 'C', price: 150, seats: Array(12).fill(false) },
  { row: 'D', price: 150, seats: Array(14).fill(false) },
  { row: 'E', price: 200, seats: Array(16).fill(false) },
  { row: 'F', price: 200, seats: Array(18).fill(false) },
  { row: 'G', price: 200, seats: Array(20).fill(false) },
  { row: 'H', price: 200, seats: Array(22).fill(false) },
  { row: 'I', price: 200, seats: Array(22).fill(false) },
  { row: 'J', price: 200, seats: Array(22).fill(false) },
];

const SeatSelection = () => {
  const { state } = useLocation();
  const { theater, movie } = state;
  const navigate = useNavigate();

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatCount, setSeatCount] = useState(0);
  const [showSeatModal, setShowSeatModal] = useState(false);
  const [showSeatMatrix, setShowSeatMatrix] = useState(false);
  const [bookedSeats, setBookedSeats] = useState(new Set());
  const [selectedDate, setSelectedDate] = useState('');

  const generateBookedSeats = () => {
    const booked = new Set();
    while (booked.size < 15) {
      const rowIndex = Math.floor(Math.random() * seatRows.length);
      const seatIndex = Math.floor(Math.random() * seatRows[rowIndex].seats.length);
      booked.add(`${rowIndex}-${seatIndex}`);
    }
    return booked;
  };

  useEffect(() => {
    setBookedSeats(generateBookedSeats());
  }, [selectedTime]);

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatKey = `${rowIndex}-${seatIndex}`;
    if (bookedSeats.has(seatKey)) {
      alert("This seat is already booked.");
      return;
    }
    if (selectedSeats.includes(seatKey)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatKey));
    } else {
      if (selectedSeats.length >= seatCount) {
        alert(`You can only book up to ${seatCount} seats.`);
        return;
      }
      setSelectedSeats([...selectedSeats, seatKey]);
    }
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    const [rowIndex] = seat.split('-').map(Number);
    return total + seatRows[rowIndex].price;
  }, 0);

  const handleShowTimeClick = (timing) => {
    setSelectedTime(timing.time);
    setSelectedSeats([]);
    setShowSeatMatrix(false);
    setShowSeatModal(true);
  };

  const handleSeatCountSelect = (count) => {
    setSeatCount(count);
    setShowSeatModal(false);
    setShowSeatMatrix(true);
  };

  const generateDateOptions = () => {
    const options = [];
    const startDate = new Date('2025-04-05');
    for (let i = 0; i < 6; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      options.push(date.toLocaleDateString('en-GB'));
    }
    return options;
  };

  const handlePayClick = async () => {
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    const seatNumbers = selectedSeats.map(seat => {
      const [rowIndex, seatIndex] = seat.split('-').map(Number);
      return `${seatRows[rowIndex].row}${seatIndex + 1}`;
    });

    const bookingDetails = {
      movieTitle: movie.title,
      theater,
      showTime: selectedTime,
      selectedDate,
      seats: seatNumbers,
      totalPrice,
    };

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/order-summary', {
          state: {
            movie: movie.title,
            theater,
            time: selectedTime,
            seats: seatNumbers,
            totalPrice,
          },
        });
      } else {
        alert(`Booking failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while making the booking.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title} - {theater}</h1>

      <h2>Select Show Date & Time</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '15px',
          }}
        >
          <option value="" disabled>Select Date</option>
          {generateDateOptions().map((date, index) => (
            <option key={index} value={date}>{date}</option>
          ))}
        </select>
        <div style={{ display: 'flex', gap: '15px' }}>
          {timingsData.map((timing, index) => (
            <button
              key={index}
              style={{
                backgroundColor: timing.availableSeats > 0 ? 'lightgreen' : 'lightcoral',
                color: 'black',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleShowTimeClick(timing)}
            >
              {timing.time}
            </button>
          ))}
        </div>
      </div>

      {selectedTime && showSeatMatrix && (
        <>
          <h2>Seat Map - {selectedTime} on {selectedDate}</h2>
          <p style={{ color: 'red' }}>Red seats are booked and cannot be selected.</p>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              backgroundColor: '#333', // Light black background
              padding: '15px',
              width: '335px',
              display: 'inline-block',
              textAlign: 'center',
              position: 'relative',
            }}>
              <span style={{
                fontWeight: 'bold',
                fontSize: '18px',
                color: 'white', // White text color
                animation: 'blink 1s step-start infinite' // Add animation for blinking
              }}>
                SCREEN
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            {seatRows.map((row, rowIndex) => (
              <div key={row.row} style={{ display: 'flex', gap: '5px' }}>
                <span style={{ width: '50px', display: 'inline-block' }}>{row.row}</span>
                {row.seats.map((_, seatIndex) => {
                  const seatKey = `${rowIndex}-${seatIndex}`;
                  const isBooked = bookedSeats.has(seatKey);
                  const isSelected = selectedSeats.includes(seatKey);
                  return (
                    <button
                      key={seatIndex}
                      onClick={() => handleSeatClick(rowIndex, seatIndex)}
                      style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: isSelected ? 'green' : (isBooked ? 'red' : 'white'),
                        border: '1px solid black',
                        cursor: isBooked ? 'not-allowed' : 'pointer',
                      }}
                      disabled={isBooked}
                    >
                      {seatIndex + 1}
                    </button>
                  );
                })}
                <span style={{ marginLeft: '20px' }}>₹{row.price}</span>
              </div>
            ))}
          </div>

          <h3>Total Selected Seats: {selectedSeats.length}</h3>
          <h3>Total Price: ₹{totalPrice}</h3>
          <button
            onClick={handlePayClick}
            style={{
              padding: '10px 30px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Pay Now
          </button>
        </>
      )}

      {showSeatModal && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            <h2>How Many Seats?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {[1, 2, 3, 4, 5].map(count => (
                <button
                  key={count}
                  onClick={() => handleSeatCountSelect(count)}
                  style={{ margin: '10px', cursor: 'pointer', padding: '10px 20px', display: 'flex', alignItems: 'center' }}
                >
                  {count === 1 && <span>🚴</span>}
                  {count === 2 && <span>🛵</span>}
                  {count === 3 && <span>🚗</span>}
                  {count === 4 && <span>🚙</span>}
                  {count === 5 && <span>🚘</span>}
                  <span style={{ marginLeft: '10px' }}>{count} Seat{count > 1 ? 's' : ''}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Blinking Animation CSS */}
      <style>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SeatSelection;

