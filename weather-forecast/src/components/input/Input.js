import styles from './Input.module.css';

export default function Input() {

    let iconClasses = ['fa-solid', 'fa-magnifying-glass', styles.icon]

    return (
        <>
        <i className={iconClasses.join(' ')}></i>
        <input className={styles.input} type="text" placeholder="Search for a place.." />

        </>
    )
}