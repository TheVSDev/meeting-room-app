// Imports
import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

// CustomScheduleForm form
const CustomScheduleForm = ({ onClose }) => {
  return (
    <div className={styles.body}>
    <div className={styles.containerLeft}>
      <RoomBookTitle titleLabel="BOOKING" />
      <button className={styles.cancelButton} onClick={onClose}>
        Cancel
      </button>
    </div>
  </div>
  );
};

export default CustomScheduleForm;
