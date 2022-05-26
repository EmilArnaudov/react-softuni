import styles from './WeatherDetailsSecondary.module.css'

export default function WeatherDetailsSecondary({
    weather
}) {

    if (Object.keys(weather).length === 0) {
        return;
    }

    let windSpeed = Math.round(Number(weather.wind.speed)) * 3.6

    return (
        <div className={styles.container}>

            <div className={styles.row}>
            <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Wind</p>
                        <p className={styles.secondaryDescription}>Today wind speed</p>
                        <p className={styles.secondaryUnits}>{windSpeed}km/h</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Rain Chance</p>
                        <p className={styles.secondaryDescription}>Today rain chance</p>
                        <p className={styles.secondaryUnits}>{Math.round(Math.random() * 100)}%</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
            </div>

            <div className={styles.row}>
            <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Pressure</p>
                        <p className={styles.secondaryDescription}>Today pressure</p>
                        <p className={styles.secondaryUnits}>{weather.main.pressure}hpa</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.secondaryLeftSide}>
                        <p className={styles.secondaryTitle}>Visibility</p>
                        <p className={styles.secondaryDescription}>Today visibility</p>
                        <p className={styles.secondaryUnits}>{weather.visibility}</p>
                    </div>
                    <div className={styles.secondaryRightSide}>
                    </div>
                </div>
            </div>
        </div>
    )
}