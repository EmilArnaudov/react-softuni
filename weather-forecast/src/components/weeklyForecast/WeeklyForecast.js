import styles from './WeeklyForecast.module.css';
import DayOfWeek from '../dayOfWeek/DayOfWeek';

export default function WeeklyForecast() {
    return (
        <div className={styles.container}>
            <DayOfWeek></DayOfWeek>
        </div>
    )
}