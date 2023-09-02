// Imports
import React, { useState, useEffect } from "react";

import styles from "../web/styles/General.module.css";
import HeadPage from "../web/components/HeadPage";
import FreeRoom from "../web/components/FreeRoom";
import BookRoomForm from "../web/components/BookRoomForm";

// HomePage
const HomePage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // openForm function
  const openForm = () => {
    setIsFormOpen(true);
  };

  // closeForm function
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      <HeadPage />
      <FreeRoom />
      <button className={styles.plusButton} onClick={openForm}>
        <img src="/images/plus.svg" />
      </button>
      {isFormOpen && <BookRoomForm onClose={closeForm} />}
    </>
  );
};

export default HomePage;
