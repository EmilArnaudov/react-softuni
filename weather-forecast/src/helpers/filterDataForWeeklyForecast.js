export default function filterDataForWeeklyForecast(data) {
    let filteredData = data.filter(element => getTime(element) === '12:00:00');
    return filteredData;
}


function getTime(element) {
    return element.dt_txt.split(' ')[1];
}