import styles from './Screen.module.css';

export default function Screen({
    expression
}) {
    return (
        <p className={styles.screen}>{expression}</p>
    )
}