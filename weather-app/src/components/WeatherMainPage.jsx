import { useEffect, useState } from 'react'
import CurrentWeather from './CurrentWeather'
import News from './News'

const WeatherMainPage = ({ result }) => {
    
    const API_KEY = import.meta.env.VITE_ONECALL_KEY;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL("https://api.openweathermap.org/data/2.5/onecall?");
                url.searchParams.append("lat", result.lat);
                url.searchParams.append("lon", result.lon);
                url.searchParams.append("appid", API_KEY);
                const response = await fetch(url);
                const data = await response.json();
                setResults(data);
                // console.log(data);    
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        
        fetchData();

    }, [result]);
    
    return (
        <>
            <CurrentWeather />
            <News />
        </>
    )
}

export default WeatherMainPage