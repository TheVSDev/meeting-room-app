import styles from "../styles/RoomBook.module.css";

const FreeRoom = () => {
  return (
    <div className={styles.body}>
      <div className={styles.containerLeft}>
        <h1 className={styles.title}>FREE</h1>
        <button className={styles.btnSchedule}><span className={styles.plus}>+</span></button>
      </div>
    </div>
  );
};

export default FreeRoom;
