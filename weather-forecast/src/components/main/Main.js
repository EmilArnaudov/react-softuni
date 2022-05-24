import styles from './Main.module.css';
import Input from '../input/Input';
import WeatherDetailsLarge from '../weatherDetailsLarge/WeatherDetailsLarge';

export default function Main() {
    return (
        <div className={styles.main}>
            <Input></Input>
            <WeatherDetailsLarge></WeatherDetailsLarge>
        </div>
    )
}