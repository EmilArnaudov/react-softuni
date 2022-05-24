import styles from './WeatherDetailsLarge.module.css';

export default function WeatherDetailsLarge() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                 <div className={styles.placeAndTime}>
                    <span className={styles.place}><i class="fa-solid fa-location-dot"></i> New York</span>
                    <span className={styles.time}>Today 00:32 PM</span>
                </div>

                <div className={styles.degreesMain}>
                    <p className={styles.degrees}>14&#176;</p>
                    <p className={styles.subheading}>Mostly Clear</p>
                </div>
                <div className={styles.secondaryDetails}>
                    <span className={styles.pressure}><i class="fa-solid fa-wind"></i><span className={styles.value}>720hpa</span></span>
                    <span className={styles.humidity}><i class="fa-solid fa-droplet"></i><span className={styles.value}>32%</span></span>
                    <span className={styles.wind}><i class="fa-solid fa-wind"></i><span className={styles.value}>13km/h</span></span>
                </div>
            </div>

        </div>
    )
}