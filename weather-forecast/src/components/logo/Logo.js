import styles from './Logo.module.css';

export default function Logo({

}) {
    return (
        <a className={styles.logo} href=""><span className={styles.fore}>Fore<i class="fa-solid fa-sun"></i></span>Weather</a>
    )
}