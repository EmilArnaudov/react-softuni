import './App.css';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import RightAside from './components/rightAside/RightAside';

import Geocode from 'react-geocode';
import {useEffect} from 'react';

function App() {
  Geocode.setApiKey('AIzaSyBPM8RiSajTY8XekfkFNbLMzQ3wwJENolo');
  Geocode.setLocationType("ROOFTOP");

  navigator.geolocation.getCurrentPosition((data) => {
    Geocode.fromLatLng(data.coords.latitude, data.coords.longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    )
  })
  

  return (
    <div className="container">
        <Aside></Aside>
        <Main></Main>
        <RightAside></RightAside>
    </div>
  );
}

export default App;
