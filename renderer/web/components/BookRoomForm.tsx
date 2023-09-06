// Imports
import React, { useState, useEffect } from "react";

import styles from "../styles/RoomBook.module.css";
import TimeButton from "./TimeButton";
import RoomBookTitle from "./RoomBookTitle";
import CustomScheduleForm from "./CustomScheduleForm";

// BookRoomForm form
const BookRoomForm = ({ onClose }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  // openForm function
  const openForm = () => {
      setIsFormOpen(true);
    };
    
    // closeForm function
  const closeForm = () => {
      setIsFormOpen(false);
  };

  return (
    <div className={styles.body}>
    <div className={styles.containerLeftFree}>
      <RoomBookTitle titleLabel="BOOKING" />
      <span className={styles.time}>Today at {formatTime(currentDateTime)}</span>
      <TimeButton btnLabel="15 min" />
      <TimeButton btnLabel="30 min" />
      <TimeButton btnLabel="45 min" />
      <button className={styles.customScheduleButton} onClick={openForm}>Custom Schedule</button>
      <button className={styles.cancelButton} onClick={onClose}>
        Cancel
      </button>
    </div>
    {isFormOpen && <CustomScheduleForm onClose={closeForm} />}
  </div>
  );
};

export default BookRoomForm;
