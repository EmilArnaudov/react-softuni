export default function getHourForHourlyForecast(date) {
    let time = date.split(' ')[1];
    time = time.split(':');
    time.pop()
    return time.join(':')
} 