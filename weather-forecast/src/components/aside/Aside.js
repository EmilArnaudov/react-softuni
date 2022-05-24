import styles from './Aside.module.css'

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

export default function Aside({

}) {
    return (
        <aside className={styles.aside}>
            <Logo></Logo>
            <Navigation></Navigation>
        </aside>
    )
}