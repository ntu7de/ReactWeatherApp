import { useEffect, useState } from 'react'

const CurrentWeather = ({ lat, lon }) => {
    
    const API_KEY = import.meta.env.VITE_ONECALL_KEY;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const url = new URL("https://api.openweathermap.org/data/2.5/onecall?");
                // const url = new URL("https://api.openweathermap.org/data/2.5/weather?");
                // const url = new URL("https://pro.openweathermap.org/data/2.5/forecast/hourly?");
                const url = new URL("https://api.openweathermap.org/data/2.5/forecast/daily?");
                url.searchParams.append("lat", lat);
                url.searchParams.append("lon", lon);
                url.searchParams.append("appid", API_KEY);
                const response = await fetch(url);
                const data = await response.json();
                setResults(data);
                // console.log(results.main.temp);  
                // console.log(data);
                console.log(results);
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
        <>
            <p>{results.main ? `Current Temperature: ${formatToFarenheit(results.main.temp)}` : ''}&deg;F</p>
            <p>JTLKSDAJFLKSDJFLKASJFDLAKSFJLKJ</p>
            <p>lfjldkfjlskjFLKDSJFLKDSJFLK</p>
        </>
    )
}

export default CurrentWeather