import styles from './WeekToggle.module.css';

export default function WeekToggle() {
    return (
        <div className={styles.container}>
            <button className={styles.button}><i className="fa-solid fa-chevron-left"></i> </button>
            <span className={styles.currentWeek}>This Week</span>
            <button className={styles.button}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    )
}