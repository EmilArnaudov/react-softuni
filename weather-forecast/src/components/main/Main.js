import styles from './Main.module.css';
import Input from '../input/Input';
import WeatherDetailsLarge from '../weatherDetailsLarge/WeatherDetailsLarge';
import WeatherDetailsSecondary from '../weatherDetailsSecondary/WeatherDetailsSecondary';

export default function Main({
    forecast,
    searchCityHandler,
    weather,
}) {
    return (
        <div className={styles.main}>
            <Input searchCityHandler={searchCityHandler} ></Input>
            <WeatherDetailsLarge weather={weather} forecast={forecast}></WeatherDetailsLarge>
            <WeatherDetailsSecondary weather={weather} forecast={forecast}></WeatherDetailsSecondary>
        </div>
    )
}