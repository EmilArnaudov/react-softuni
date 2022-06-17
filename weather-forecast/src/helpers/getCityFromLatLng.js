import Geocode from 'react-geocode';
import { GOOGLE_API_KEY } from '../constants/constants';

export default async function getCityName(lat, lng) {
    Geocode.setApiKey(GOOGLE_API_KEY);
    Geocode.setLocationType("ROOFTOP");

    let response = await Geocode.fromLatLng(lat, lng);
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

    console.log(address);
    console.log(city);

   return city;




}