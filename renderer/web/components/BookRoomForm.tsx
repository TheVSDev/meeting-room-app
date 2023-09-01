// Imports
import React, { useState, useEffect } from "react";

import styles from "../styles/RoomBook.module.css";
import TimeButton from "./TimeButton";
import RoomBookTitle from "./RoomBookTitle";

// BookRoomForm form
const BookRoomForm = ({ onClose }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    // Update the current date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className={styles.body}>
    <div className={styles.containerLeft}>
      <RoomBookTitle titleLabel="BOOKING" />
      <span className={styles.time}>Today at {formatTime(currentDateTime)}</span>
      <TimeButton btnLabel="15 min" />
      <TimeButton btnLabel="30 min" />
      <TimeButton btnLabel="45 min" />
      <button className={styles.customScheduleButton}>Custom Schedule</button>
      <button className={styles.cancelButton} onClick={onClose}>
        Cancel
      </button>
    </div>
  </div>
  );
};

export default BookRoomForm;
