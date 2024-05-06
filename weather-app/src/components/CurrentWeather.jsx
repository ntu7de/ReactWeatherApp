import { useEffect, useState } from 'react'
import '../styles/CurrentWeather.css'

const CurrentWeather = ({ lat, lon }) => {
    
    const API_KEY = import.meta.env.VITE_ONECALL_KEY;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL("https://api.openweathermap.org/data/2.5/weather?");
                url.searchParams.append("lat", lat);
                url.searchParams.append("lon", lon);
                url.searchParams.append("appid", API_KEY);
                const response = await fetch(url);
                const data = await response.json();
                setResults(data);
                // console.log(results.main.temp);  
                // console.log(data);
                // console.log(results);
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        
        fetchData();

    }, []);

    const formatToFarenheit = (temp) => {
        return parseInt((temp - 273.15) * (9/5) + 32)
    }

    return (
        <div className="current-weather">
            <h2>Current Weather</h2>
            <div className="temp">{results.main ? `${formatToFarenheit(results.main.temp)}` : ''}&deg;F</div>
            <p className="weather-main">{results.main ? `${results.weather[0].main}` : ''}</p>
            <p>{results.main ? `${results.weather[0].description}` : ''}</p>
        </div>
    )
}

export default CurrentWeather