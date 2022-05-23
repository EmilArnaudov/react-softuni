import styles from './MovieCard.module.css'

export default function MovieCard() {
    return (
        <>
            <div className={styles.cardContainer}>
                <p className={styles.movieTitle}>Scary Movie</p>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg" alt="" />
                </div>
                <p className={styles.movieYear}>2003</p>
            </div>
        </>
    )
}