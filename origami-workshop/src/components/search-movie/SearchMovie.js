import styles from './SearchMovie.module.css';

export default function SearchMovie({
    searchMovieHandler
}) {
    return (
        <>
            <form onSubmit={searchMovieHandler} className={styles.formStyle} action="">
                <h1>Search Movie</h1>
                <div>
                    <select className={styles.selectButton} name="category" id="" defaultValue="1">
                        <option className={styles.selectOption} value="1"  disabled>Category</option>
                    </select>
                    <input name="search" className={styles.inputBar} type="text" placeholder="Search movie" />
                    <button className={styles.searchButton} type="submit">Search</button>
                </div>

            </form>
        </>
    )
}