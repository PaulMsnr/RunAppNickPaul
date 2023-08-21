import React from 'react';
import Link from 'next/link'; // Import the Link component
import styles from '../components/Sidebar.module.css';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter(); // Move the useRouter hook inside the component

  const handleButtonClick = () => {
    // Redirect to the new page
    router.push('/Settings');
  };

  return (
    <nav className={styles.sidebar}>
      <button className={styles.button} onClick={handleButtonClick}>
        Settings
      </button>

      <button className={styles.button}>Training</button>
      <button className={styles.button}>Button Three</button>
    </nav>
  );
};

export default Sidebar;
