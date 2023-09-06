// FreeRoom.js
import { useState, useEffect } from "react";

import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

const BookedRoom = () => {
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

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className={styles.body}>
      <div className={styles.containerLeftBooked}>
        <RoomBookTitle titleLabel="BOOKED" />
        <span className={styles.datetime}>
          {formatTime(currentDateTime)} | {formatDate(currentDateTime)}
        </span>
        <button className={styles.timerContainer}>
          <span className={styles.timer}></span>
        </button>
      </div>
    </div>
  );
};

export default BookedRoom;
