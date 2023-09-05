// pages/login.js
import React, { useState } from 'react';
import styles from '/components/Login.module.css'; // Import your CSS module
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userRole, setUserRole] = useState('current'); // Set the initial value to 'current'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userRole === null) {
      alert('Please select a user role.'); // Add validation for userRole
      return;
    }

    // Add your login or signup logic here, based on the selected userRole
    console.log('User Role:', userRole);
    console.log('Email:', email);
    console.log('Password:', password);

    if (userRole === 'new') {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Confirm Password:', confirmPassword);
    }

    // ...
  };

  // Function to set the selected user role
  const handleUserRoleClick = (role) => {
    setUserRole(role);
  };

  return (
    <div>          
      <Navbar/>
 
      <div
        className={styles.container}>
      <div className={styles.centeredForm}>

        <h1>Login</h1>
        <div className={styles.buttonContainer}> {/* Style button container */}
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
        <form onSubmit={handleSubmit} className={styles.loginForm}> {/* Apply login form style */}
          {userRole === 'admin' && ( // Render the admin login form
            <div>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          {userRole === 'new' && ( // Render the sign-up form for "New User"
            <div>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          {userRole === 'current' && ( // Render the login form for "Current User"
            <div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          <button type="submit" className={styles.submitButton}>Login or Sign Up</button> {/* Style the submit button */}
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
