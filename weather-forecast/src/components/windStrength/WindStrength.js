import styles from './WindStrength.module.css';

export default function WindStrength({
    windSpeed
}) {

    return (
        <div className={styles.container}>
            <span className={styles.text}><i class="fa-solid fa-wind"></i></span>
        </div>
    )
}