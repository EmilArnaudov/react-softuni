import styles from './SearchMovie.module.css';

export default function SearchMovie() {
    return (
        <>
            <form className={styles.formStyle} action="">
                <h1>Search Movie</h1>
                <div>
                    <select className={styles.selectButton} name="category" id="">
                        <option className={styles.selectOption} value="" disabled selected>Category</option>
                    </select>
                    <input name="search" className={styles.inputBar} type="text" placeholder="Search movie" />
                    <button className={styles.searchButton} type="submit">Search</button>
                </div>

            </form>
        </>
    )
}