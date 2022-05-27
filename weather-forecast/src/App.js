import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import RightAside from './components/rightAside/RightAside';
import {fetchForecast, fetchWeather} from './services/weatherService';
import getCityName from './helpers/getCityFromLatLng';


import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Calendar from './components/calendar/Calendar';
import Saved from './components/saved/Saved';

function App() {
  let [city, setCity] = useState('');
  let [forecast, setForecast] = useState({});
  let [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (data) => {
      let city = await getCityName(data.coords.latitude, data.coords.longitude);
      setCity(city);
      fetchForecast(city)
        .then(forecast => {
          setForecast(forecast);
          setWeather(forecast.list[0]);

          setInterval(() => {
            setForecast(forecast);
            setWeather(forecast.list[0]);
          }, 600000)
        })
    })
  }, [])

  async function searchCityHandler(lat, lng, citySearch) {
      console.log(lat, lng);
      let city;
      //ADD TRY CATCH IF NO CITY FOUND RISK IT WITH GOOGLE ADDRESS
      try {
          city = await getCityName(lat, lng);
      } catch (error) {
          city = citySearch
      }

      setCity(city);

      try {
        fetchForecast(city)
        .then(forecast => {
          setForecast(forecast);
          setWeather(forecast.list[0]);
        })
      } catch (error) {
        console.error(error);
      }

  }

  function weekDayClickHandler(data) {
    setWeather(data);
  }

  return (
    <div className="container">
      <Router>
        <Aside></Aside>
        <Routes>
          <Route path='/' element={<Main forecast={forecast} weather={weather} searchCityHandler={searchCityHandler}></Main>}></Route>
          <Route path='/calendar' element={<Calendar></Calendar>}></Route>
          <Route path='/saved' element={<Saved></Saved>}></Route>
        </Routes>
        <RightAside weekDayClickHandler={weekDayClickHandler} forecast={forecast}></RightAside>
      </Router>
        
    </div>
  );
}

export default App;
