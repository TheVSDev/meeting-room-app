import React, { useState } from "react";
import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

// ScheduleNowForm form
const ScheduleNowForm = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className={styles.body}>
      <div className={styles.containerLeftFree}>
        <RoomBookTitle titleLabel="BOOKING" />
        <button className={styles.saveButton}>Save</button>
        <button className={styles.cancelButton2} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ScheduleNowForm;
