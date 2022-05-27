import styles from './DayOfWeek.module.css';
import styleDate from '../../helpers/styleDateForDayofWeek';
import getDayName from '../../helpers/getDayName';
import getIconLink from '../../helpers/getIconLink';
import HourlyForecast from '../hourlyForecast/HourlyForecast';


import { useEffect, useState } from 'react';

import isToday from '../../helpers/isToday';

export default function DayOfWeek({
    data,
    weekDayClickHandler,
    forecast
}) {
    let [active, setActive] = useState(false);
    let [today, setToday] = useState('');



    useEffect(() => {
        setToday(isToday(data.dt_txt.split(' ')[0]))
    }, [])

    useEffect(() => {
        if (today) {
            setActive(true);
        }
    }, [today])

    return (
        <>
        <div className={styles.container} onClick={() => {
            setActive(!active);
            if (today) {
                data.dayName = 'Today';
            } else {
                data.dayName = getDayName(data.dt_txt);
            }
            
            weekDayClickHandler(data);
            }}>
            <div className={styles.dayAndDate}>
                <p className={styles.day}>{today ? 'Today' : getDayName(data.dt_txt)}</p>
                <p className={styles.date}>{styleDate(data.dt_txt)}</p>
            </div>
            <span className={styles.degrees}>{Math.round(Number(data.main.temp))}&#176;</span>
            <img className={styles.icon} src={getIconLink(data.weather[0].icon)} alt="" />
        </div>
        
        {active ? <HourlyForecast day={today ? 'Today' : getDayName(data.dt_txt)} forecast={forecast}/> : ''}
        </>
    )
}