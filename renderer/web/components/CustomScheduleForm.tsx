import React, { useState } from "react";
import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

// CustomScheduleForm form
const CustomScheduleForm = ({ onClose }) => {
  const [fromToRadio, setFromToRadio] = useState(true); // State for the first radio button
  const [forRadio, setForRadio] = useState(false); // State for the second radio button

  const [fromTime, setFromTime] = useState(""); // State to store "From" time
  const [toTime, setToTime] = useState(""); // State to store "To" time
  const [forHours, setForHours] = useState(""); // State to store "For" hours
  const [forMinutes, setForMinutes] = useState(""); // State to store "For" minutes
  const [selectedDate, setSelectedDate] = useState("");

  const handleFromToRadioChange = () => {
    setFromToRadio(true);
    setForRadio(false);
  };

  const handleForRadioChange = () => {
    setFromToRadio(false);
    setForRadio(true);
  };

  return (
    <div className={styles.body}>
      <div className={styles.containerLeft}>
        <RoomBookTitle titleLabel="BOOKING" />

        <div className={styles.radioButtons}>
          {/* Radio button for From/To */}
          <input
            type="radio"
            id="fromToRadio"
            name="timeRadio"
            checked={fromToRadio}
            onChange={handleFromToRadioChange}
          />
          <label htmlFor="fromToRadio" className="text-white">
            From / To
          </label>

          {/* Radio button for For */}
          <input
            type="radio"
            id="forRadio"
            name="timeRadio"
            checked={forRadio}
            onChange={handleForRadioChange}
            className="ml-6"
          />
          <label htmlFor="forRadio" className="text-white">
            For
          </label>
        </div>

        <div className={styles.datePick}>
          <label>What day ?</label>
          <input
            type="date"
            className="p-3 rounded-lg text-lg"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {fromToRadio && (
          <>
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
          </>
        )}

        {forRadio && (
          <>
            <div className={styles.forTimePick}>
              <label>When ?</label>
              <input
                type="time"
                className="p-3 rounded-lg text-lg"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
              />
              <label>For:</label>
              <input
                type="number"
                className="p-2 rounded-lg text-lg w-16"
                placeholder="h"
                value={forHours}
                onChange={(e) => setForHours(e.target.value)}
              />
              <span className="text-lg ml-2 text-white">hour/s</span>
              <br />
              <br />
              <input
                type="number"
                className="p-2 rounded-lg text-lg w-16"
                placeholder="min"
                value={forMinutes}
                onChange={(e) => setForMinutes(e.target.value)}
              />
              <span className="text-lg ml-2 text-white">min</span>
            </div>
            <p className={styles.spanSchedule}>
              Scheduling for {selectedDate} from {fromTime} for {forHours} hours and{" "}
              {forMinutes} minutes
            </p>
          </>
        )}

        <button className={styles.saveButton}>Save</button>
        <button className={styles.cancelButton2} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CustomScheduleForm;
