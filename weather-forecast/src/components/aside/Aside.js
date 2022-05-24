import styles from './Aside.module.css'

import Logo from '../logo/Logo';

export default function Aside({

}) {
    return (
        <aside className={styles.aside}>
            <Logo></Logo>
        </aside>
    )
}