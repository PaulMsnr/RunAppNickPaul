import React, { useState } from 'react';
import styles from '/components/Styles.module.css';

const Settings = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [notification, setNotification] = useState(true);
  const [password, setPassword] = useState('');
  const [measurementSystem, setMeasurementSystem] = useState('metric');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNotificationChange = () => {
    setNotification(!notification);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMeasurementSystemChange = (e) => {
    setMeasurementSystem(e.target.value);
  };

  const handleSaveSettings = () => {
    // Save the settings to your backend or storage system
    // You can access the updated values in the respective state variables
  };

  return (
   <div>
    <div className={styles['settings-container']}>

      <h1>Settings</h1>

      <form className={styles['settings-form']} onSubmit={handleSaveSettings}>
        <div className={styles['settings-group']}>
          <label className={styles['settings-label']}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className={styles['settings-input']}
          />
        </div>

        <div className={styles['settings-group']}>
          <label className={styles['settings-label']}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={styles['settings-input']}
          />
        </div>

        <div className={styles['settings-group']}>
          <label className={styles['settings-label']}>Receive Notifications:</label>
          <input
            type="checkbox"
            checked={notification}
            onChange={handleNotificationChange}
            className={styles['settings-checkbox']}
          />
        </div>

        <div className={styles['settings-group']}>
          <label className={styles['settings-label']}>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles['settings-input']}
          />
        </div>

        <div className={styles['settings-group']}>
          <label className={styles['settings-label']}>Measurement System:</label>
          <select
            value={measurementSystem}
            onChange={handleMeasurementSystemChange}
            className={styles['settings-select']}
          >
            <option value="metric">Metric</option>
            <option value="us">US</option>
          </select>
        </div>

        <div className={styles['settings-group']}>
          <button type="submit" className={styles['settings-button']}>
            Save Settings
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Settings;
