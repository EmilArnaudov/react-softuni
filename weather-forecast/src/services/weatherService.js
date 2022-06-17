export async function fetchForecast(city) {
    if (!city) {
        throw Error;
    }

    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=2fe354f147126727f33eb4258889d2de&mode=json&units=metric`
    , {
        method: 'get',
    })



    let data = await response.json();

    return data;
}

export async function fetchWeather(city) {

    if (!city) {
        throw Error;
    }

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&id=524901&appid=2fe354f147126727f33eb4258889d2de&mode=json&units=metric`
    , {
        method: 'get',
    })


    let data = await response.json();

    return data;
}