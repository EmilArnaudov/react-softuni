export default async function fetchForecast(city) {
    const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=2fe354f147126727f33eb4258889d2de&mode=json&units=metric`

    let response = await fetch(API, {
        method: 'get',
    })

    let data = await response.json();

    return data;
}