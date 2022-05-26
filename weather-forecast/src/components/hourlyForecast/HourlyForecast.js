import styles from './HourlyForecast.module.css';
import getIconLink from '../../helpers/getIconLink';
import getHourForHourlyForecast from '../../helpers/getHourForHourlyForecast';

export default function HourlyForecast({
    forecast
}) {

    if (Object.keys(forecast).length === 0) {
        return;
    }

    return (
        <div className={styles.container}>
            <p className={styles.selectedDay}>Today</p>
            <div className={styles.hoursDiv}>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>{getHourForHourlyForecast(forecast.list[0].dt_txt)}</p>
                    <img className={styles.icon} src={getIconLink(forecast.list[0].weather[0].icon)} alt="" />
                    <p className={styles.degrees}>{Math.round(Number(forecast.list[0].main.temp))}&#176;</p>
                </div>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>{getHourForHourlyForecast(forecast.list[1].dt_txt)}</p>
                    <img className={styles.icon} src={getIconLink(forecast.list[0].weather[0].icon)} alt="" />
                    <p className={styles.degrees}>{Math.round(Number(forecast.list[1].main.temp))}&#176;</p>
                </div>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>{getHourForHourlyForecast(forecast.list[2].dt_txt)}</p>
                    <img className={styles.icon} src={getIconLink(forecast.list[0].weather[0].icon)} alt="" />
                    <p className={styles.degrees}>{Math.round(Number(forecast.list[2].main.temp))}&#176;</p>
                </div>
                <div className={styles.hour}>
                    <p className={styles.timeOfDay}>{getHourForHourlyForecast(forecast.list[3].dt_txt)}</p>
                    <img className={styles.icon} src={getIconLink(forecast.list[0].weather[0].icon)} alt="" />
                    <p className={styles.degrees}>{Math.round(Number(forecast.list[3].main.temp))}&#176;</p>
                </div>
            </div>
        </div>
    )
}