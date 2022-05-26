import styles from './Main.module.css';
import Input from '../input/Input';
import WeatherDetailsLarge from '../weatherDetailsLarge/WeatherDetailsLarge';
import WeatherDetailsSecondary from '../weatherDetailsSecondary/WeatherDetailsSecondary';

export default function Main({
    weather,
}) {
    return (
        <div className={styles.main}>
            <Input></Input>
            <WeatherDetailsLarge weather={weather}></WeatherDetailsLarge>
            <WeatherDetailsSecondary weather={weather}></WeatherDetailsSecondary>
        </div>
    )
}