import styles from './Main.module.css';
import Input from '../input/Input';
import WeatherDetailsLarge from '../weatherDetailsLarge/WeatherDetailsLarge';
import WeatherDetailsSecondary from '../weatherDetailsSecondary/WeatherDetailsSecondary';

export default function Main() {
    return (
        <div className={styles.main}>
            <Input></Input>
            <WeatherDetailsLarge></WeatherDetailsLarge>
            <WeatherDetailsSecondary></WeatherDetailsSecondary>
        </div>
    )
}