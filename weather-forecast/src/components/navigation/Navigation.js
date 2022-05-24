import styles from './Navigation.module.css'

export default function Navigation() {
    let selected = [styles.navItem, styles.active]
    let selectedDotClass = ['fa-solid', 'fa-circle', styles.dot]
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <a className={selected.join(' ')} href=""><i class="fa-solid fa-table-columns"></i>Dashboard</a>
                <div >
                    <i className={selectedDotClass.join(' ')}></i>
                </div>
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