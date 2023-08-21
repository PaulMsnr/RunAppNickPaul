// pages/dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import styles from '../components/DashboardLayout.module.css';

const workoutData = [
  {
    day: 'Day 1',
    exercises: ['Exercise A', 'Exercise B', 'Exercise C'],
  },
  {
    day: 'Day 2',
    exercises: ['Exercise X', 'Exercise Y', 'Exercise Z'],
  },
  // ... more days ...
];

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <Main workoutData={workoutData} />
      </div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Dashboard;
