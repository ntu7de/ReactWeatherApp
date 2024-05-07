import { useEffect, useState } from 'react'
import '../styles/HourlyWeather.css'
import HourlyForecast from './HourlyForecast'
import { Box } from '@mui/system';

const HourlyWeather = ({ lat, lon }) => {
    
    const API_KEY = import.meta.env.VITE_ONECALL_KEY;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL("https://pro.openweathermap.org/data/2.5/forecast/hourly?");
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

    return (
        <>
            <div className="hourly-weather">
                <h2>Hourly Forecast</h2>
                <Box sx={{ 
                    display: 'flex', 
                    gap: 4,
                    overflowX: 'auto',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}  
                >
                    {results.list && results.list.slice(0,24).map(( forecast ) => {
                        return (
                            <Box key={forecast.dt}>
                                <HourlyForecast forecast={forecast}/>
                            </Box>
                        )
                    })}
                </Box>
            </div>
        </>
    )
}

export default HourlyWeather