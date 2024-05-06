import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import News from './News'
import { Box } from '@mui/system';
import '../styles/WeatherMainPage.css'


const WeatherMainPage = ({ result }) => {
    
    return (
        <>
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"header header header header"
                "current-weather current-weather daily-weather daily-weather"
                "hourly-weather hourly-weather news news"` }}
            >
                <Box className='header' sx={{ gridArea: 'header'}}><h1>
                    {result.name}{result.state ? `, ${result.state}` : ""}</h1>
                </Box>
                <Box sx={{ gridArea: 'current-weather'}}>
                    <CurrentWeather lat={result.lat} lon={result.lon}/>
                </Box>
                <Box sx={{ gridArea: 'daily-weather'}}>
                    <DailyWeather lat={result.lat} lon={result.lon}/>
                </Box>
                <Box sx={{ gridArea: 'hourly-weather', bgcolor: 'purple'}}>Hourly Weather here</Box>
                <Box className='news' sx={{ gridArea: 'news'}}>
                    <News />
                </Box>
            </Box>
        </>
    )
}

export default WeatherMainPage