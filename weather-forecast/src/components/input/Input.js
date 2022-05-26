import { useState } from 'react';

import styles from './Input.module.css';
import { GOOGLE_API_KEY } from '../../constants/constants';
import Autocomplete from "react-google-autocomplete";

export default function Input({
    searchCityHandler
}) {

    let iconClasses = ['fa-solid', 'fa-magnifying-glass', styles.icon]

    return (
        <>

        <i className={iconClasses.join(' ')}></i>
        <Autocomplete
            className={styles.input}
            apiKey={GOOGLE_API_KEY}
            onPlaceSelected={(place) => {
                    let city = place.address_components[0].short_name
                    let lat = place.geometry.location.lat()
                    let lng = place.geometry.location.lng()
                    searchCityHandler(lat, lng, city);

        }}/>

        </>
    )
}