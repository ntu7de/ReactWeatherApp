import { useEffect, useState } from 'react'
import '../styles/DailyWeather.css'
import Forecast from './DailyForecast'
import { Box } from '@mui/system';

const DailyWeather = ({ lat, lon }) => {
    
    const API_KEY = import.meta.env.VITE_ONECALL_KEY;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const url = new URL("https://pro.openweathermap.org/data/2.5/forecast/hourly?");
                const url = new URL("https://api.openweathermap.org/data/2.5/forecast/daily?");
                url.searchParams.append("lat", lat);
                url.searchParams.append("lon", lon);
                url.searchParams.append("appid", API_KEY);
                const response = await fetch(url);
                const data = await response.json();
                setResults(data);
                console.log(results.list);
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
                {/* <Box sx={{ 
                            display: 'flex', 
                            gap: 1,
                            overflowX: 'auto',
                            flexWrap: 'nowrap' }}
                >
                    <Box>
                        <p>Yup</p>
                    </Box>
                    <Box>
                        <p>Yup</p>
                    </Box>
                        
                </Box> */}
                <Box sx={{ 
                    display: 'flex', 
                    gap: 4,
                    overflowX: 'auto',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}  
                >
                    {results.list && results.list.map(( forecast ) => {
                        return (
                            <Box key={forecast.dt}>
                                <Forecast forecast={forecast}/>
                            </Box>
                        )
                    })}
                </Box>
            </div>
        </>
    )
}

export default DailyWeather