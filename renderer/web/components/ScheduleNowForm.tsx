// Imports
import React, { useState, useEffect } from "react";
import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

// ScheduleNowForm form
const ScheduleNowForm = ({ onClose }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");

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
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className={styles.body}>
      <div className={styles.containerLeftFree}>
        <RoomBookTitle titleLabel="BOOKING" />
        <span className={styles.time}>
          Today at {formatTime(currentDateTime)}
        </span>
        <div className={styles.bookNowContainer}>
            <span className="text-white text-xl">Book this room from right now - {formatTime(currentDateTime)} until </span>
            <input type="time" className="p-3 rounded-lg text-lg ml-3" />
        </div>
        <button className={styles.saveButton}>Save</button>
        <button className={styles.cancelButton2} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ScheduleNowForm;
