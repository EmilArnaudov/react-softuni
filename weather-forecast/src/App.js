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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (data) => {
      let city = await getCityName(data.coords.latitude, data.coords.longitude);
      setCity(city);
      fetchForecast(city)
        .then(forecast => {
          setForecast(forecast);

          setInterval(() => {
            setForecast(forecast);
          }, 600000)
        })
    })
  }, [])

  async function searchCityHandler(lat, lng) {
      let city = await getCityName(lat, lng);
      setCity(city);
      fetchForecast(city)
        .then(forecast => {
          setForecast(forecast);
        })
  }

  return (
    <div className="container">
      <Router>
        <Aside></Aside>
        <Routes>
          <Route path='/' element={<Main forecast={forecast} searchCityHandler={searchCityHandler}></Main>}></Route>
          <Route path='/calendar' element={<Calendar></Calendar>}></Route>
          <Route path='/saved' element={<Saved></Saved>}></Route>
        </Routes>
        <RightAside forecast={forecast}></RightAside>
      </Router>
        
    </div>
  );
}

export default App;
