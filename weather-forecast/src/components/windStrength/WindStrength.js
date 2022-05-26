import styles from './WindStrength.module.css';

export default function WindStrength({
    windSpeed
}) {

    return (
        <div className={styles.container}>
            <span className={styles.text}>CALM</span>
        </div>
    )
}