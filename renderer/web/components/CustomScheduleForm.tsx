import React, { useState } from "react";
import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

// CustomScheduleForm form
const CustomScheduleForm = ({ onClose }) => {
  const [fromTime, setFromTime] = useState(""); // State to store "From" time
  const [toTime, setToTime] = useState(""); // State to store "To" time
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className={styles.body}>
      <div className={styles.containerLeftFree}>
        <RoomBookTitle titleLabel="BOOKING" />
        <div className={styles.datePick}>
          <label>What day ?</label>
          <input
            type="date"
            className="p-3 rounded-lg text-lg"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className={styles.fromTimePick}>
          <label>From:</label>
          <input
            type="time"
            className="p-3 rounded-lg text-lg"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
        </div>
        <div className={styles.toTimePick}>
          <label>To:</label>
          <input
            type="time"
            className="p-3 rounded-lg text-lg"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
        </div>
        <p className={styles.spanSchedule}>
          Scheduling for {selectedDate} from {fromTime} to {toTime}
        </p>
        <button className={styles.saveButton}>Save</button>
        <button className={styles.cancelButton2} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CustomScheduleForm;
