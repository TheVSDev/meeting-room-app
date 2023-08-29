import styles from "../styles/RoomBook.module.css";
import RoomBookTitle from "./RoomBookTitle";

const FreeRoom = () => {
  return (
    <div className={styles.body}>
      <div className={styles.containerLeft}>
        <RoomBookTitle titleLabel="FREE" />
        <button className={styles.btnSchedule}><span className={styles.plus}>+</span></button>
      </div>
    </div>
  );
};

export default FreeRoom;
