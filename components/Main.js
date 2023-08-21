// components/MainContent.js
import React, { useState } from 'react';
import styles from '../components/Main.module.css';


const Main = ({ workoutData }) => {
    const [currentDayIndex, setCurrentDayIndex] = useState(0);
  
    const handleNextDay = () => {
      if (currentDayIndex < workoutData.length - 1) {
        setCurrentDayIndex(currentDayIndex + 1);
      }
    };
  
    const handlePreviousDay = () => {
      if (currentDayIndex > 0) {
        setCurrentDayIndex(currentDayIndex - 1);
      }
    };
  
    const handleCurrentDay = () => {
      setCurrentDayIndex(0); // Set index to the current day
    };
  
    const currentWorkout = workoutData[currentDayIndex];
  
    return (
      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.buttonsContainer}>
            <button onClick={handlePreviousDay}>Previous Day</button>
            <button onClick={handleCurrentDay}>{currentWorkout.day}</button>
            <button onClick={handleNextDay}>Next Day</button>
        </div>
        </div>
        <div className={styles.row}>
          <table className={styles.workoutTable}>
            <thead>
          
              <tr>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {currentWorkout.exercises.map((exercise, index) => (
                <tr key={index}>
                  <td>{exercise}</td>
                  <td>3</td>
                  <td>10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  };
  
  export default Main;