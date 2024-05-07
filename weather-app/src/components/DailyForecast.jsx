import '../styles/DailyForecast.css'
import { Box } from '@mui/system';

const DailyForecast = ({ forecast }) => {

    const formatToFarenheit = (temp) => {
        return parseInt((temp - 273.15) * (9/5) + 32)
    }

    // Function to convert date-time returned by API to just a day abbreviation
    const formatDateTime = (time) => {
        const timestamp = time; 
        const date = new Date(timestamp * 1000); 
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayIndex = date.getDay(); 
        return daysOfWeek[dayIndex];
    }
    
    console.log(forecast);

    return (
        <Box className='daily-forecast' sx={{ 
            display: 'grid', 
            gap: 3,
            gridTemplateColumns: "auto auto auto auto",
            gridTemplateRows: 'auto',   
        }}
        >
            <Box>
                <p>{formatDateTime(forecast.dt)}</p>
            </Box>
            <Box>
                {forecast.weather && forecast.weather[0] && (
                        <img
                            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                            alt={forecast.weather[0].description}
                            className='daily-weather-icon'
                        />
                )}
            </Box>
            <Box>
                <p>Lo: {formatToFarenheit(forecast.temp.min)}&deg;</p>
            </Box>
            <Box>
                <p>Hi: {formatToFarenheit(forecast.temp.max)}&deg;</p>
            </Box>
        </Box>
    )
}

export default DailyForecast