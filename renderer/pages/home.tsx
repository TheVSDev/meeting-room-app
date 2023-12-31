// Imports
import styles from "../web/styles/General.module.css";
import Button from "../web/components/Button";
import HeadPage from "../web/components/HeadPage";

// Welcome page function
const Welcome = () => {
  return (
    <>
      <HeadPage />
      <div className={styles.container}>
        <h1 className={styles.headerTitle}>Meeting Room App</h1>
        <h2 className={styles.heading}>Conference Room Scheduling Software</h2>
        <br />
        <a href="./home-page">
          <Button btnLabel="Let's meet" />
        </a>
      </div>
    </>
  );
};

export default Welcome;
