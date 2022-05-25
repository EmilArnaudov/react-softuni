import styles from './WeatherDetailsSecondary.module.css'

export default function WeatherDetailsSecondary() {
    return (
        <div className={styles.container}>

            <div className={styles.row}>
            <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Wind</p>
                        <p className={styles.secondaryDescription}>Today wind speed</p>
                        <p className={styles.secondaryUnits}>12km/h</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Wind</p>
                        <p className={styles.secondaryDescription}>Today wind speed</p>
                        <p className={styles.secondaryUnits}>12km/h</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
            </div>

            <div className={styles.row}>
            <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Wind</p>
                        <p className={styles.secondaryDescription}>Today wind speed</p>
                        <p className={styles.secondaryUnits}>12km/h</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Wind</p>
                        <p className={styles.secondaryDescription}>Today wind speed</p>
                        <p className={styles.secondaryUnits}>12km/h</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
            </div>
        </div>
    )
}