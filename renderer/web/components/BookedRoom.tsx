import React, { useState, useEffect } from "react";
import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

const BookedRoom = ({ countdownTime }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [remainingTime, setRemainingTime] = useState(countdownTime * 60); // Convert minutes to seconds

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

  useEffect(() => {
    // Decrease remaining time every second
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the countdown reaches zero
    if (remainingTime <= 0) {
      clearInterval(timerId);
      // Call a function to return to the FreeRoom component (you need to implement this function)
      // Example: returnToFreeRoom();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [remainingTime]);

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

  const formatRemainingTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
  };

  return (
    <div className={styles.body}>
      <div className={styles.containerLeftBooked}>
        <RoomBookTitle titleLabel="BOOKED" />
        <span className={styles.datetime}>
          {formatTime(currentDateTime)} | {formatDate(currentDateTime)}
        </span>
        <div className={styles.timerContainer}>
          <span className={styles.timer}>{formatRemainingTime(remainingTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default BookedRoom;
