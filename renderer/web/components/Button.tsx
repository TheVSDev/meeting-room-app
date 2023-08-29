import styles from "../styles/General.module.css";

const Button = (props: { btnLabel: any }) => {
    const { btnLabel } = props

    return (
        <button className={styles.btn}>{btnLabel}</button>
    )
}

export default Button