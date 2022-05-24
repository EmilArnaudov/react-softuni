import styles from './Button.module.css';

export default function Button({
    symbol,
    clickHandler
}) {
    return (
        <button onClick={clickHandler} className={styles.calcButton}>{symbol}</button>
    )
}