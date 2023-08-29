import styles from "../styles/RoomBook.module.css";

const RoomBookTitle = (props: { titleLabel: any }) => {
    const { titleLabel } = props

    return (
        <h1 className={styles.title}>
            {titleLabel}
        </h1>
    )
}

export default RoomBookTitle