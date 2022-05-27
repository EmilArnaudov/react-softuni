import styles from './WeeklyForecast.module.css';
import DayOfWeek from '../dayOfWeek/DayOfWeek';
import filterDataForWeeklyForecast from '../../helpers/filterDataForWeeklyForecast';

export default function WeeklyForecast({
    forecast,
    weekDayClickHandler
}) {

    if (Object.keys(forecast).length === 0) {
        return;
    }

    let filteredData = filterDataForWeeklyForecast(forecast.list);

    return (
        <div className={styles.container}>
        {filteredData.map(data => <DayOfWeek forecast={forecast} weekDayClickHandler={weekDayClickHandler} key={data.dt} data={data}></DayOfWeek>) }

        </div>
    )
}