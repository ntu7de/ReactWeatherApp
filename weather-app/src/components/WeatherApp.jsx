import Search from './Search'
import '../styles/WeatherApp.css'
import { useState } from 'react';

const WeatherApp = () => {

    // const [showWeatherMainPage, setShowWeatherMainPage] = useState(true);
    
    // const handleBackButtonClick = () => {
    //     setShowWeatherMainPage(false);
    // };

    return (
        <>
            <h2 className='app-header'>Weather App</h2>
            <Search />
        </>
    )

}

export default WeatherApp;