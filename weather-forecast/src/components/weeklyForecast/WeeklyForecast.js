import styles from './WeeklyForecast.module.css';
import DayOfWeek from '../dayOfWeek/DayOfWeek';
import filterDataForWeeklyForecast from '../../helpers/filterDataForWeeklyForecast';
import { useState } from 'react';

export default function WeeklyForecast({
    forecast,
    weekDayClickHandler
}) {

    let [activeDay, setActiveDay] = useState('Today');

    if (Object.keys(forecast).length === 0) {
        return;
    }

    function dayActiveClickHandler(day) {
        console.log(day);
        setActiveDay(day);
    }

    let filteredData = filterDataForWeeklyForecast(forecast.list);

    return (
        <div className={styles.container}>
        {filteredData.map(data =>   <DayOfWeek 
                                        forecast={forecast} 
                                        weekDayClickHandler={weekDayClickHandler} 
                                        key={data.dt} 
                                        data={data}
                                        activeDay={activeDay}
                                        dayActiveClickHandler={dayActiveClickHandler}
                                    >
                                </DayOfWeek>) }

        </div>
    )
}