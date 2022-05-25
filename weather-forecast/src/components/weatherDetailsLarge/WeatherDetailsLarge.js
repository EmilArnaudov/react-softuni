import styles from './WeatherDetailsLarge.module.css';

export default function WeatherDetailsLarge({
    time,
    weather,
}) {
    if (Object.keys(weather).length === 0) {
        return;
    }
    console.log(weather);
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                 <div className={styles.placeAndTime}>
                    <span className={styles.place}><i class="fa-solid fa-location-dot"></i><span>{weather.name}</span></span>
                    <span className={styles.time}>Today {time}</span>
                </div>

                <div className={styles.degreesMain}>
                    <p className={styles.degrees}>{Math.round(Number(weather.main.temp))}&#176;</p>
                    <p className={styles.subheading}>Mostly Clear</p>
                </div>
                <div className={styles.secondaryDetails}>
                    <span className={styles.pressure}><i class="fa-solid fa-wind"></i><span className={styles.value}>720hpa</span></span>
                    <span className={styles.humidity}><i class="fa-solid fa-droplet"></i><span className={styles.value}>32%</span></span>
                    <span className={styles.wind}><i class="fa-solid fa-wind"></i><span className={styles.value}>13km/h</span></span>
                </div>
            </div>

            <div className={styles.rightSide}>
                <p className={styles.rightSideHeading}>Temperature</p>

                <div className={styles.partDayDegrees}>
                    <div className={styles.partDay}>
                        <p className={styles.partDayPart}>Morning</p>
                        <p className={styles.partDayDegrees}>15&#176;</p>
                    </div>
                    <div className={styles.partDay}>
                        <p className={styles.partDayPart}>Morning</p>
                        <p className={styles.partDayDegrees}>15&#176;</p>
                    </div>
                    <div className={styles.partDay}>
                        <p className={styles.partDayPart}>Morning</p>
                        <p className={styles.partDayDegrees}>15&#176;</p>
                    </div>
                    <div className={styles.partDay}>
                        <p className={styles.partDayPart}>Morning</p>
                        <p className={styles.partDayDegrees}>15&#176;</p>
                    </div>
                </div>
            </div>

        </div>
    )
}