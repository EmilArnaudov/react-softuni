import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
    let selected = [styles.navItem, styles.active]
    let selectedDotClass = ['fa-solid', 'fa-circle', styles.dot]
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link to="/" className={selected.join(' ')} href=""><i className="fa-solid fa-table-columns"></i>Dashboard</Link>
                <div >
                    <i className={selectedDotClass.join(' ')}></i>
                </div>
            </li>
            <li>
                <Link to="/saved" className={styles.navItem} href=""><i className="fa-solid fa-heart"></i>Saved Location</Link>
            </li>
            <li>
                <Link to="/calendar" className={styles.navItem} href=""><i className="fa-solid fa-calendar-days"></i>Calendar</Link>
            </li>
        </ul>
    )
}