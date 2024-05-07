import { useEffect, useState } from 'react'
import '../styles/DailyWeather.css'
import DailyForecast from './DailyForecast'
import { Box } from '@mui/system';

const DailyWeather = ({ lat, lon }) => {
    
    const API_KEY = import.meta.env.VITE_ONECALL_KEY;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL("https://api.openweathermap.org/data/2.5/forecast/daily?");
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
            <div className="daily-weather">
                <h2>7-Day Forecast</h2>
                <Box sx={{ 
                    display: 'grid', 
                    gap: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}  
                >
                    {results.list && results.list.map(( forecast ) => {
                        return (
                            <Box key={forecast.dt}>
                                <DailyForecast forecast={forecast}/>
                            </Box>
                        )
                    })}
                </Box>
            </div>
        </>
    )
}

export default DailyWeather