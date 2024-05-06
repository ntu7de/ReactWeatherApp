import CurrentWeather from './CurrentWeather'
import News from './News'

const WeatherMainPage = ({ result }) => {
    
    return (
        <>
            <CurrentWeather lat={result.lat} lon={result.lon}/>
            <News />
        </>
    )
}

export default WeatherMainPage