import styles from './Main.module.css';
import Input from '../input/Input';
import WeatherDetailsLarge from '../weatherDetailsLarge/WeatherDetailsLarge';
import WeatherDetailsSecondary from '../weatherDetailsSecondary/WeatherDetailsSecondary';

export default function Main({
    forecast,
    searchCityHandler,
}) {
    return (
        <div className={styles.main}>
            <Input searchCityHandler={searchCityHandler} ></Input>
            <WeatherDetailsLarge forecast={forecast}></WeatherDetailsLarge>
            <WeatherDetailsSecondary forecast={forecast}></WeatherDetailsSecondary>
        </div>
    )
}