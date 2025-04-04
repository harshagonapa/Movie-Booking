
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');

// // Initialize Express app
// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(express.json());
// app.use(cors()); // Enable CORS for React frontend

// // MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/bookmyshow-clone', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully!');
//   } catch (err) {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1);
//   }
// };

// connectDB();

// // Routes
// app.use('/api/users', userRoutes); // Set up user routes

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // Import booking routes

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for React frontend

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookmyshow-clone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use('/api/users', userRoutes); // Set up user routes
app.use('/api/bookings', bookingRoutes); // Set up booking routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
