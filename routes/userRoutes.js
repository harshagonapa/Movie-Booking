// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../models/User');
// const router = express.Router();

// // Sign-up route
// router.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error });
//   }
// });

// // Sign-in route
// router.post('/signin', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Sign-in successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error signing in', error });
//   }
// });

// module.exports = router;
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Sign-up route
router.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, phone, password: hashedPassword });

    // Save the user in the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error });
  }
});

// Sign-in route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Return success response with user data
    res.status(200).json({ message: 'Sign In successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error signing in', error });
  }
});

module.exports = router;
