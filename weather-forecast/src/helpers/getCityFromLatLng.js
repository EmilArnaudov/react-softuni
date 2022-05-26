import Geocode from 'react-geocode';

export default async function getCityName(lat, lng) {
    console.log('getting weather info');
    Geocode.setApiKey('AIzaSyBPM8RiSajTY8XekfkFNbLMzQ3wwJENolo');
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

   return city;




}