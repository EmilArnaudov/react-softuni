import styles from './RightAside.module.css'
import WeekToggle from '../weekToggle/WeekToggle'
import HourlyForecast from '../hourlyForecast/HourlyForecast'
import WeeklyForecast from '../weeklyForecast/WeeklyForecast'

export default function RightAside({
    forecast
}) {
    return (
        <div className={styles.container} >
            <WeekToggle></WeekToggle>
            <HourlyForecast forecast={forecast}></HourlyForecast>
            <WeeklyForecast forecast={forecast}></WeeklyForecast>
        </div>
    )
}