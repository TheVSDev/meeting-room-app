// Imports
import React, { useState, useEffect } from "react";
import styles from "../styles/RoomBook.module.css";
import TimeButton from "./TimeButton";

// BookRoomForm
const BookRoomForm = () => {
  return (
    <div className={styles.body}>
      <div className={styles.containerLeft}>
        <TimeButton btnLabel="15:00" />
      </div>
    </div>
  );
};

export default BookRoomForm;
