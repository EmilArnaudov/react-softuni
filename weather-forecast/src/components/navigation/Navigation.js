import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <ul className={styles.ul}>
            <li>
                <a className={styles.navItem} href=""><i class="fa-solid fa-table-columns"></i>Dashboard</a>
            </li>
            <li>
                <a className={styles.navItem} href=""><i class="fa-solid fa-heart"></i>Saved Location</a>
            </li>
            <li>
                <a className={styles.navItem} href=""><i class="fa-solid fa-calendar-days"></i>Calendar</a>
            </li>
        </ul>
    )
}