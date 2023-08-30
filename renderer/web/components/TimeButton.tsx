import styles from "../styles/General.module.css";

const TimeButton = (props: { btnLabel: any }) => {
    const { btnLabel } = props

    return (
        <button className={styles.btnTime}>{btnLabel}</button>
    )
}

export default TimeButton