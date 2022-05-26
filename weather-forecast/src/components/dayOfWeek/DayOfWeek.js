import styles from './DayOfWeek.module.css';
import styleDate from '../../helpers/styleDateForDayofWeek';
import getDayName from '../../helpers/getDayName';
import getIconLink from '../../helpers/getIconLink';

export default function DayOfWeek({
    data
}) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.dayAndDate}>
                <p className={styles.day}>{getDayName(data.dt_txt)}</p>
                <p className={styles.date}>{styleDate(data.dt_txt)}</p>
            </div>
            <span className={styles.degrees}>{Math.round(Number(data.main.temp))}&#176;</span>
            <img className={styles.icon} src={getIconLink(data.weather[0].icon)} alt="" />
        </div>
        </>
    )
}