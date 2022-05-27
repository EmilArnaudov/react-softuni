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
    forecast,
    activeDay,
    dayActiveClickHandler
}) {
    let [todayName, setTodayName] = useState('');
    let [active, setActive] = useState(false);

    useEffect(() => {
        let today = isToday(data.dt_txt.split(' ')[0]);
        if (today) {
            setTodayName('Today')
        } else {
            setTodayName(getDayName(data.dt_txt));
        }
    }, [])

    useEffect(() => {
        if (activeDay === todayName) {
            setActive(true);
        } else {
            setActive(false);
        }
    })

    return (
        <>
        <div className={styles.container} onClick={() => {
            console.log(active);
            dayActiveClickHandler(todayName);
            data.dayName = todayName;
            weekDayClickHandler(data);
            }}>
            <div className={styles.dayAndDate}>
                <p className={styles.day}>{todayName}</p>
                <p className={styles.date}>{styleDate(data.dt_txt)}</p>
            </div>
            <span className={styles.degrees}>{Math.round(Number(data.main.temp))}&#176;</span>
            <img className={styles.icon} src={getIconLink(data.weather[0].icon)} alt="" />
        </div>
        
        {active ? <HourlyForecast day={todayName} forecast={forecast}/> : ''}
        </>
    )
}