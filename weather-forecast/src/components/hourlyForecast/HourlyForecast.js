import styles from './HourlyForecast.module.css';

export default function HourlyForecast() {
    return (
        <div className={styles.container}>
            <p className={styles.selectedDay}>Today</p>
            <div className={styles.hoursDiv}>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>Now</p>
                    <img className={styles.icon} src="/images/sun.png" alt="" />
                    <p className={styles.degrees}>24&#176;</p>
                </div>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>Now</p>
                    <img className={styles.icon} src="/images/sun.png" alt="" />
                    <p className={styles.degrees}>24&#176;</p>
                </div>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>Now</p>
                    <img className={styles.icon} src="/images/sun.png" alt="" />
                    <p className={styles.degrees}>24&#176;</p>
                </div>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>Now</p>
                    <img className={styles.icon} src="/images/sun.png" alt="" />
                    <p className={styles.degrees}>24&#176;</p>
                </div>
            </div>
        </div>
    )
}