import styles from './WeeklyForecast.module.css';
import DayOfWeek from '../dayOfWeek/DayOfWeek';
import filterDataForWeeklyForecast from '../../helpers/filterDataForWeeklyForecast';

export default function WeeklyForecast({
    forecast
}) {

    if (Object.keys(forecast).length === 0) {
        return;
    }

    let filteredData = filterDataForWeeklyForecast(forecast.list);

    return (
        <div className={styles.container}>
        {filteredData.map(data => <DayOfWeek key={data.dt} data={data}></DayOfWeek>) }

        </div>
    )
}