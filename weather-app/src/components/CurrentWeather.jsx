import { useEffect, useState } from 'react'
import '../styles/CurrentWeather.css'
import { Box } from '@mui/system';

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
            <Box sx={{ 
                    display: 'flex', 
                    gap: 4,
                    overflowX: 'auto',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box>
                    <p className="temperature">{results.main ? `${formatToFarenheit(results.main.temp)}` : ''}&deg;F</p>
                </Box>
                <Box></Box>
                <Box>
                    {results.weather && results.weather[0] && (
                        <img
                            src={`http://openweathermap.org/img/wn/${results.weather[0].icon}.png`}
                            alt={results.weather[0].description}
                            className="weather-icon"
                        />
                    )}
                    {/* <p>{results.main ? `${results.weather[0].description}` : ''}</p> */}
                    <p className="weather-main">{results.main ? `${results.weather[0].main}` : ''}</p>
                </Box>
            </Box> 
        </div>
    )
}

export default CurrentWeather