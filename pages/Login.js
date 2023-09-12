import React, { useState } from 'react';
import styles from '/components/Login.module.css'; // Import your CSS module
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userRole, setUserRole] = useState('current'); // Set the initial value to 'current'

  // Initialize state variables for form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send POST request to Flask API to create a new user
      const response = await axios.post('http://localhost:5000/create_user', formData);
      
      // Log the response from the server
      console.log('User created:', response.data);
    } catch (error) {
      // Handle errors
      console.error('There was an error creating the user:', error);
    }
  };

  // Function to set the selected user role
  const handleUserRoleClick = (role) => {
    setUserRole(role);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.centeredForm}>
          <h1>Login</h1>
          <div className={styles.buttonContainer}>
            <button
              className={userRole === 'new' ? styles.active : ''}
              onClick={() => handleUserRoleClick('new')}
            >
              New User
            </button>
            <button
              className={userRole === 'current' ? styles.active : ''}
              onClick={() => handleUserRoleClick('current')}
            >
              Current User
            </button>
            <button
              className={userRole === 'admin' ? styles.active : ''}
              onClick={() => handleUserRoleClick('admin')}
            >
              Admin
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            {userRole === 'new' && (
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button type="submit">Create User</button>
              </div>
            )}
            {userRole === 'current' && (
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}
            {userRole === 'admin' && (
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit" className={styles.submitButton}>
              Login or Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
