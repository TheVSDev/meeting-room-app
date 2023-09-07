import styles from "../styles/General.module.css";

const TimeButton = (props: { btnLabel: any, onClick: any }) => {
    const { btnLabel, onClick } = props

    return (
        <button className={styles.btnTime} onClick={onClick}>{btnLabel}</button>
    )
}

export default TimeButton