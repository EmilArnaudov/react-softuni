import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
    let selected = [styles.navItem, styles.active]
    let selectedDotClass = ['fa-solid', 'fa-circle', styles.dot]
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <NavLink to="/" className={(props) => {
                    return `${props.isActive ? selected.join(' ') : styles.navItem}`
                }} href=""><i className="fa-solid fa-table-columns"></i>Dashboard</NavLink>
                <div >
                    <i className={selectedDotClass.join(' ')}></i>
                </div>
            </li>
        </ul>
    )
}