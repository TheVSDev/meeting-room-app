// FreeRoom.js
import React, { useState, useEffect } from "react";

import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";
import BookRoomForm from "./BookRoomForm";

const FreeRoom = () => {
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

  const formatDate = (date) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
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
      <div className={styles.containerLeft}>
        <RoomBookTitle titleLabel="FREE" />
        <span className={styles.datetime}>
          {formatTime(currentDateTime)} | {formatDate(currentDateTime)}
        </span>
        <button className={styles.btnSchedule} onClick={openForm}>
          <span className={styles.plus}>+</span>
        </button>
      </div>
      {isFormOpen && <BookRoomForm onClose={closeForm} />}
    </div>
  );
};

export default FreeRoom;
