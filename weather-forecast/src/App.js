import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import RightAside from './components/rightAside/RightAside';

import {useEffect, useState} from 'react';
import {fetchForecast, fetchWeather} from './services/weatherService';
import getCityName from './helpers/getCityFromLatLng';

function App() {
  let [weather, setWeather] = useState({});
  let [forecast, setForecast] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (data) => {
      let city = await getCityName(data.coords.latitude, data.coords.longitude);
      fetchWeather(city)
        .then(weather => {
          setWeather(weather);

          setInterval(() => {
            setWeather(weather);
          }, 600000)
        })
    })
  }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (data) => {
      let city = await getCityName(data.coords.latitude, data.coords.longitude);
      fetchForecast(city)
        .then(forecast => {
          setForecast(forecast);

          setInterval(() => {
            setForecast(forecast);
          }, 600000)
        })
    })
  }, [weather])

  return (
    <div className="container">
        <Aside></Aside>
        <Main weather={weather}></Main>
        <RightAside forecast={forecast}></RightAside>
    </div>
  );
}

export default App;
