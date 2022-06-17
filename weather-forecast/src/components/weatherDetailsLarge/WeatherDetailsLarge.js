import styles from './WeatherDetailsLarge.module.css';
import getTime from '../../helpers/getTime';
import getIconLink from '../../helpers/getIconLink';

import {useEffect, useState} from 'react';

export default function WeatherDetailsLarge({
    forecast,
    weather
}) {
    let [time, setTime] = useState()

    useEffect(() => {
        setTime(getTime());
        setInterval(() => {
            setTime(getTime());
        }, 60000);
      }, [])

    if (Object.keys(forecast).length === 0) {
        return;
    }

    if (weather.dayName === undefined) {
        weather.dayName = 'Today'
    }

    let windSpeed = Math.round(Number(weather.wind.speed)) * 3.6

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                 <div className={styles.placeAndTime}>
                    <span className={styles.place}><i className="fa-solid fa-location-dot"></i><span>{forecast.city.name}</span></span>
                    <span className={styles.time}>{weather.dayName} {weather.dayName === 'Today' ? time : '12:00'}</span>
                </div>

                <div className={styles.degreesMain}>
                    <p className={styles.degrees}>{Math.round(Number(weather.main.temp))}&#176;</p>
                    <p className={styles.subheading}>{weather.weather[0].description}</p>
                </div>
                <div className={styles.secondaryDetails}>
                    <span className={styles.pressure}><i className="fa-solid fa-wind"></i><span className={styles.value}>{weather.main.pressure}hpa</span></span>
                    <span className={styles.humidity}><i className="fa-solid fa-droplet"></i><span className={styles.value}>{weather.main.humidity}%</span></span>
                    <span className={styles.wind}><i className="fa-solid fa-wind"></i><span className={styles.value}>{windSpeed}km/h</span></span>
                </div>
            </div>

            <div className={styles.rightSide}>
                <p className={styles.rightSideHeading}>Temperature</p>

                <div className={styles.iconContainer}>
                    <img src={getIconLink(weather.weather[0].icon)} alt="" />
                </div>

                <div className={styles.partDayDegrees}>
                    <div className={styles.partDay}>
                        <p className={styles.partDayPart}>Min Temp</p>
                        <p className={styles.partDayDegrees}>{Math.round(Number(weather.main.temp_min))}&#176;</p>
                    </div>
                    <div className={styles.partDay}>
                        <p className={styles.partDayPart}>Max Temp</p>
                        <p className={styles.partDayDegrees}>{Math.round(Number(weather.main.temp_max))}&#176;</p>
                    </div>
                    <div className={styles.partDay}>
                        <p className={styles.partDayPart}>Feels Like</p>
                        <p className={styles.partDayDegrees}>{Math.round(Number(weather.main.feels_like))}&#176;</p>
                    </div>
                </div>
            </div>

        </div>
    )
}