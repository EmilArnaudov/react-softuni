import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import RightAside from './components/rightAside/RightAside';
import getTime from './helpers/getTime';

import Geocode from 'react-geocode';
import {useEffect, useState} from 'react';
import fetchForecast from './services/weatherService';

function App() {
  let [time, setTime] = useState('');
  let [forecast, setForecast] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, [])

  useEffect(() => {
    Geocode.setApiKey('AIzaSyBPM8RiSajTY8XekfkFNbLMzQ3wwJENolo');
    Geocode.setLocationType("ROOFTOP");

    navigator.geolocation.getCurrentPosition((data) => {
      Geocode.fromLatLng(data.coords.latitude, data.coords.longitude).then(
        async (response) => {
          const address = response.results[0].formatted_address;
          let city, state, country;
          for (let i = 0; i < response.results[0].address_components.length; i++) {
            for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
              switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                  city = response.results[0].address_components[i].long_name;
                  break;
                case "administrative_area_level_1":
                  state = response.results[0].address_components[i].long_name;
                  break;
                case "country":
                  country = response.results[0].address_components[i].long_name;
                  break;
              }
            }
          }
          let cityForecast = await fetchForecast(city);
          setForecast(cityForecast);
        },
        (error) => {
          console.error(error);
        }
      );
    })
  }, [])

  return (
    <div className="container">
        <Aside></Aside>
        <Main forecast={forecast} time={time}></Main>
        <RightAside></RightAside>
    </div>
  );
}

export default App;
