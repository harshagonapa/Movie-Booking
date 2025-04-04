// // src/components/Navbar.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import './Navbar.css';

// const Navbar = ({ setSelectedLanguage, setSearchTerm }) => {
//   const [showSignInModal, setShowSignInModal] = useState(false);
//   const [showSignUpModal, setShowSignUpModal] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState(''); // To store user's name
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [signUpPassword, setSignUpPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [loggedInUser, setLoggedInUser] = useState(null); // For showing logged-in user's name

//   const navigate = useNavigate(); // Hook for navigation

//   const openSignInModal = () => {
//     setShowSignInModal(true);
//     setShowSignUpModal(false); // Close Sign Up modal
//     setMessage(''); // Clear any previous messages
//   };

//   const closeSignInModal = () => {
//     setShowSignInModal(false);
//     setMessage(''); // Clear message when closing the modal
//   };

//   const openSignUpModal = () => {
//     setShowSignInModal(false); // Close Sign In modal
//     setShowSignUpModal(true); // Open Sign Up modal
//     setMessage(''); // Clear message when opening sign-up
//   };

//   const closeSignUpModal = () => {
//     setShowSignUpModal(false);
//     setMessage(''); // Clear message when closing the modal
//   };

//   const handleSignIn = () => {
//     if (username === '' || password === '') {
//       setMessage('Please fill in both username and password');
//     } else {
//       setMessage('Sign In successful'); // Show success message
//       // Set logged-in user
//       setLoggedInUser(username); 
//       // Reset fields
//       setUsername('');
//       setPassword('');
//       closeSignInModal(); // Close modal after sign-in
//     }
//   };

//   const handleSignUp = () => {
//     if (name === '' || email === '' || phone === '' || signUpPassword === '') {
//       setMessage('Please fill in all details');
//     } else {
//       setMessage('Sign Up successful'); // Show success message
//       // Set logged-in user
//       setLoggedInUser(name); 
//       // Reset fields
//       setName('');
//       setEmail('');
//       setPhone('');
//       setSignUpPassword('');
//       closeSignUpModal(); // Close modal after sign-up
//       openSignInModal(); // Open Sign In modal after successful sign-up
//       // Navigate to the home page
//       navigate('/'); // Navigate to App.js if needed
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value); // Update the search term state in App.js
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo-container">
//           <img
//             src="https://clipground.com/images/book-my-show-logo-png-15.png"
//             alt="BookMyShow Logo"
//             className="navbar-logo"
//           />
//         </div>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search for movies"
//             className="search-bar"
//             onChange={handleSearchChange} // Update search term on input change
//           />
//           {/* Language selection dropdown */}
//           <select className="language-select" onChange={(e) => setSelectedLanguage(e.target.value)}>
//             <option value="All">All Languages</option>
//             <option value="Hindi">Hindi</option>
//             <option value="Telugu">Telugu</option>
//             <option value="English">English</option>
//           </select>
//         </div>
//         <div className="auth-container">
//           {loggedInUser ? (
//             <span className="welcome-message">Welcome, {loggedInUser}</span> // Show username after login
//           ) : (
//             <button className="sign-in-btn" onClick={openSignInModal}>Sign In</button>
//           )}
//         </div>
//       </nav>

//       {/* Sign In Modal */}
//       {showSignInModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Sign In</h2>
//             <input 
//               type="text" 
//               placeholder="Username" 
//               className="modal-input" 
//               value={username}
//               onChange={(e) => setUsername(e.target.value)} 
//             />
//             <input 
//               type="password" 
//               placeholder="Password" 
//               className="modal-input" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//             <button onClick={handleSignIn} className="modal-sign-in-btn">Sign In</button>
//             <button onClick={openSignUpModal} className="modal-sign-in-btn">Sign Up</button>
//             <button onClick={closeSignInModal} className="close-modal-btn">Close</button>
//             {message && <p className="modal-message">{message}</p>}
//           </div>
//         </div>
//       )}

//       {/* Sign Up Modal */}
//       {showSignUpModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Sign Up</h2>
//             <input 
//               type="text" 
//               placeholder="Name" 
//               className="modal-input" 
//               value={name}
//               onChange={(e) => setName(e.target.value)} 
//             />
//             <input 
//               type="email" 
//               placeholder="Email" 
//               className="modal-input" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//             />
//             <input 
//               type="text" 
//               placeholder="Phone" 
//               className="modal-input" 
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)} 
//             />
//             <input 
//               type="password" 
//               placeholder="Password" 
//               className="modal-input" 
//               value={signUpPassword}
//               onChange={(e) => setSignUpPassword(e.target.value)} 
//             />
//             <button onClick={handleSignUp} className="modal-sign-in-btn">Sign Up</button>
//             <button onClick={closeSignUpModal} className="close-modal-btn">Close</button>
//             {message && <p className="modal-message">{message}</p>}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import './Navbar.css';

// const Navbar = () => {
//   const [showSignInModal, setShowSignInModal] = useState(false);
//   const [showSignUpModal, setShowSignUpModal] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [signUpPassword, setSignUpPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [loggedInUser, setLoggedInUser] = useState(null); // For showing logged-in user's name

//   const navigate = useNavigate(); // Hook for navigation

//   const openSignInModal = () => {
//     setShowSignInModal(true);
//     setShowSignUpModal(false); // Close Sign Up modal
//     setMessage(''); // Clear any previous messages
//   };

//   const closeSignInModal = () => {
//     setShowSignInModal(false);
//     setMessage(''); // Clear message when closing the modal
//   };

//   const openSignUpModal = () => {
//     setShowSignInModal(false); // Close Sign In modal
//     setShowSignUpModal(true); // Open Sign Up modal
//     setMessage(''); // Clear message when opening sign-up
//   };

//   const closeSignUpModal = () => {
//     setShowSignUpModal(false);
//     setMessage(''); // Clear message when closing the modal
//   };

//   const handleSignIn = async () => {
//     if (username === '' || password === '') {
//       setMessage('Please fill in both username and password');
//     } else {
//       try {
//         const response = await fetch('http://localhost:5000/api/users/signin', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: username, password }),
//         });
//         const data = await response.json();

//         if (response.ok) {
//           setMessage('Sign In successful');
//           setLoggedInUser(data.user.name); // Set logged-in user
//           setUsername('');
//           setPassword('');
//           closeSignInModal();
//         } else {
//           setMessage(data.message || 'Error signing in');
//         }
//       } catch (error) {
//         setMessage('Error signing in');
//       }
//     }
//   };

//   const handleSignUp = async () => {
//     if (name === '' || email === '' || phone === '' || signUpPassword === '') {
//       setMessage('Please fill in all details');
//     } else {
//       try {
//         const response = await fetch('http://localhost:5000/api/users/signup', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ name, email, phone, password: signUpPassword }),
//         });
//         const data = await response.json();

//         if (response.ok) {
//           setMessage('Sign Up successful');
//           closeSignUpModal();
//           openSignInModal(); // Open sign-in modal after successful sign-up
//         } else {
//           setMessage(data.message || 'Error signing up');
//         }
//       } catch (error) {
//         setMessage('Error signing up');
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <h1>My Website</h1>
//         {loggedInUser ? (
//           <p>Welcome, {loggedInUser}</p>
//         ) : (
//           <button onClick={openSignInModal}>Sign In / Sign Up</button>
//         )}
//       </nav>

//       {/* Sign In Modal */}
//       {showSignInModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Sign In</h2>
//             <input
//               type="text"
//               placeholder="Email"
//               className="modal-input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="modal-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleSignIn} className="modal-sign-in-btn">
//               Sign In
//             </button>
//             <button onClick={openSignUpModal} className="modal-sign-in-btn">
//               Sign Up
//             </button>
//             <button onClick={closeSignInModal} className="close-modal-btn">
//               Close
//             </button>
//             {message && <p className="modal-message">{message}</p>}
//           </div>
//         </div>
//       )}

//       {/* Sign Up Modal */}
//       {showSignUpModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Sign Up</h2>
//             <input
//               type="text"
//               placeholder="Name"
//               className="modal-input"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="modal-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               className="modal-input"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="modal-input"
//               value={signUpPassword}
//               onChange={(e) => setSignUpPassword(e.target.value)}
//             />
//             <button onClick={handleSignUp} className="modal-sign-up-btn">
//               Sign Up
//             </button>
//             <button onClick={closeSignUpModal} className="close-modal-btn">
//               Close
//             </button>
//             {message && <p className="modal-message">{message}</p>}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png'; // Corrected path to the logo image

const Navbar = ({ setSelectedLanguage, setSearchTerm }) => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null); // For showing logged-in user's name

  const openSignInModal = () => {
    setShowSignInModal(true);
    setShowSignUpModal(false); // Close Sign Up modal
    setMessage(''); // Clear any previous messages
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
    setMessage(''); // Clear message when closing the modal
  };

  const openSignUpModal = () => {
    setShowSignInModal(false); // Close Sign In modal
    setShowSignUpModal(true); // Open Sign Up modal
    setMessage(''); // Clear message when opening sign-up
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
    setMessage(''); // Clear message when closing the modal
  };

  const handleSignIn = async () => {
    if (username === '' || password === '') {
      setMessage('Please fill in both username and password');
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/users/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: username, password }),
        });
        const data = await response.json();

        if (response.ok) {
          setMessage('Sign In successful');
          setLoggedInUser(data.user.name); // Set logged-in user
          setUsername('');
          setPassword('');
          closeSignInModal();
        } else {
          setMessage(data.message || 'Error signing in');
        }
      } catch (error) {
        setMessage('Error signing in');
      }
    }
  };

  const handleSignUp = async () => {
    if (name === '' || email === '' || phone === '' || signUpPassword === '') {
      setMessage('Please fill in all details');
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, password: signUpPassword }),
        });
        const data = await response.json();

        if (response.ok) {
          setMessage('Sign Up successful');
          closeSignUpModal();
          openSignInModal(); // Open sign-in modal after successful sign-up
        } else {
          setMessage(data.message || 'Error signing up');
        }
      } catch (error) {
        setMessage('Error signing up');
      }
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term state in App.js
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img
            src={logo} // Updated to use the local logo image
            alt="BookMyShow Logo"
            className="navbar-logo"
          />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies"
            className="search-bar"
            onChange={handleSearchChange} // Update search term on input change
          />
          {/* Language selection dropdown */}
          <select className="language-select" onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option value="All">All Languages</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
            <option value="English">English</option>
          </select>
        </div>
        <div className="auth-container">
          {loggedInUser ? (
            <span className="welcome-message">Welcome, {loggedInUser}</span> // Show username after login
          ) : (
            <button className="sign-in-btn" onClick={openSignInModal}>Sign In</button>
          )}
        </div>
      </nav>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Sign In</h2>
            <input 
              type="text" 
              placeholder="Email" 
              className="modal-input" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="modal-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSignIn} className="modal-sign-in-btn">Sign In</button>
            <button onClick={openSignUpModal} className="modal-sign-in-btn">Sign Up</button>
            <button onClick={closeSignInModal} className="close-modal-btn">Close</button>
            {message && <p className="modal-message">{message}</p>}
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Sign Up</h2>
            <input 
              type="text" 
              placeholder="Name" 
              className="modal-input" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="modal-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Phone" 
              className="modal-input" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="modal-input" 
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)} 
            />
            <button onClick={handleSignUp} className="modal-sign-in-btn">Sign Up</button>
            <button onClick={closeSignUpModal} className="close-modal-btn">Close</button>
            {message && <p className="modal-message">{message}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
