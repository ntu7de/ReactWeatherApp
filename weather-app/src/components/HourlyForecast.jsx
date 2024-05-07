import '../styles/HourlyForecast.css'

const HourlyForecast = ({ forecast }) => {

    const formatToFarenheit = (temp) => {
        return parseInt((temp - 273.15) * (9/5) + 32)
    }

    // Function to convert date-time returned by API to just a day abbreviation
    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString); 
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Handle midnight (0 hours)
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedTime = formattedHours + ':' + formattedMinutes + ' ' + ampm;
        return formattedTime;
    }
    
    return (
        <div className="hourly-forecast">
            <p>{formatDateTime(forecast.dt_txt)}</p>
            {forecast.weather && forecast.weather[0] && (
                <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt={forecast.weather[0].description}
                />
            )}
            <p className="temp">{formatToFarenheit(forecast.main.temp)}&deg;</p>
        </div>
    )
}

export default HourlyForecast