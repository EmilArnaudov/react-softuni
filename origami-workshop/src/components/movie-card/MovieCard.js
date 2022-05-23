import styles from './MovieCard.module.css'

export default function MovieCard({
    movie
}) {
    return (
        <>
            <div className={styles.cardContainer}>
                <p className={styles.movieTitle}>{movie.Title}</p>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={movie.Poster} alt="" />
                </div>
                <p className={styles.movieYear}>{movie.Year}</p>
            </div>
        </>
    )
}