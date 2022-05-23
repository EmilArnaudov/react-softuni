import styles from './Gallery.module.css'
import MovieCard from "../movie-card/MovieCard"

export default function Gallery(
    {movies}
) {
    return (
        <>
            <ul className={styles.galleryList}>
                {movies.map(movie => <MovieCard key={Date.now() + Math.random()} movie={movie}></MovieCard>)}
            </ul>
        </>
    )
}