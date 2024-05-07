import Search from './Search'
import '../styles/WeatherApp.css'

const WeatherApp = () => {

    return (
        <>
            <h2 className='app-header'>Weather App</h2>
            <h3>Enter a location:</h3>
            <Search />
        </>
    )

}

export default WeatherApp;