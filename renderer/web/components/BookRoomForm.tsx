// Imports
import React, { useState, useEffect } from "react";

import styles from "../styles/RoomBook.module.css";
import TimeButton from "./TimeButton";
import RoomBookTitle from "./RoomBookTitle";
import CustomScheduleForm from "./CustomScheduleForm";
import ScheduleNowForm from "./ScheduleNowForm";

// BookRoomForm form
const BookRoomForm = ({ onClose }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScheduleNowFormOpen, setIsScheduleNowFormOpen] = useState(false);

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

  // openForm function for Custom Schedule Form
  const openForm = () => {
    setIsFormOpen(true);
  };

  // closeForm function for Custom Schedule Form
  const closeForm = () => {
    setIsFormOpen(false);
  };

  // openScheduleNowForm function for Schedule Now Form
  const openScheduleNowForm = () => {
    setIsScheduleNowFormOpen(true);
  };

  // closeScheduleNowForm function for Schedule Now Form
  const closeScheduleNowForm = () => {
    setIsScheduleNowFormOpen(false);
  };

  return (
    <div className={styles.body}>
      <div className={styles.containerLeftFree}>
        <RoomBookTitle titleLabel="BOOKING" />
        <span className={styles.time}>
          Today at {formatTime(currentDateTime)}
        </span>
        <div className="grid grid-cols-3 gap-4">
          <TimeButton btnLabel="15 min" />
          <TimeButton btnLabel="30 min" />
          <TimeButton btnLabel="45 min" />
          <TimeButton btnLabel="1h 30 min" />
          <TimeButton btnLabel="1h 45 min" />
          <TimeButton btnLabel="2h 10 min" />
        </div>
        <button className={styles.scheduleNowButton} onClick={openScheduleNowForm}>
          Schedule For Now
        </button>
        <button className={styles.customScheduleButton} onClick={openForm}>
          Custom Schedule
        </button>
        <button className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
      </div>
      {isFormOpen && <CustomScheduleForm onClose={closeForm} />}
      {isScheduleNowFormOpen && <ScheduleNowForm onClose={closeScheduleNowForm} />}
    </div>
  );
};

export default BookRoomForm;
