import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import RightAside from './components/rightAside/RightAside';
import {fetchForecast} from './services/weatherService';
import getCityName from './helpers/getCityFromLatLng';


import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Calendar from './components/calendar/Calendar';
import Saved from './components/saved/Saved';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase';

const app = initializeApp(firebaseConfig);

function App() {
  let [city, setCity] = useState('');
  let [forecast, setForecast] = useState({});
  let [weather, setWeather] = useState({});
  const [sharedLocation, setSharedLocation] = useState(false)
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let shared = false;
      navigator.geolocation.getCurrentPosition(async (data) => {
        shared = true;
        let cityName = await getCityName(data.coords.latitude, data.coords.longitude);
        setCity(cityName);
      })

      if (!shared) {
        setCity('London');
      }

  }, [])

  useEffect(() => {
    fetchForecast(city)
    .then(forecast => {
      setForecast(forecast);
      setWeather(forecast.list[0]);

      setInterval(() => {
        setForecast(forecast);
        setWeather(forecast.list[0]);
      }, 600000)
    })
  }, [city])


  async function searchCityHandler(lat, lng, citySearch) {
      console.log(lat, lng, citySearch);
      let cityName;
      try {
          cityName = await getCityName(lat, lng);

          if (!cityName) {
            throw Error;
          }

          setCity(cityName);

      } catch (error) {
          setShowError(true);

          setTimeout(() => {
            setShowError(false);
          }, 5000);
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
          <Route path='/' element={<Main showError={showError} forecast={forecast} weather={weather} searchCityHandler={searchCityHandler}></Main>}></Route>
        </Routes>
        <RightAside weekDayClickHandler={weekDayClickHandler} forecast={forecast}></RightAside>
      </Router>
        
    </div>
  );
}

export default App;
