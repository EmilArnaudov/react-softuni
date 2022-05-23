import styles from './Gallery.module.css'
import MovieCard from "../movie-card/MovieCard"

export default function Gallery() {
    return (
        <>
            <ul className={styles.galleryList}>
                <li><MovieCard></MovieCard></li>
                <li><MovieCard></MovieCard></li>
                <li><MovieCard></MovieCard></li>
            </ul>
        </>
    )
}