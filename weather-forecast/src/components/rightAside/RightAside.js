import styles from './RightAside.module.css'
import WeekToggle from '../weekToggle/WeekToggle'
import HourlyForecast from '../hourlyForecast/HourlyForecast'
import WeeklyForecast from '../weeklyForecast/WeeklyForecast'

export default function RightAside({
    forecast,
    weekDayClickHandler
}) {
    return (
        <div className={styles.container} >
            <WeekToggle></WeekToggle>
            <WeeklyForecast weekDayClickHandler={weekDayClickHandler} forecast={forecast}></WeeklyForecast>
        </div>
    )
}