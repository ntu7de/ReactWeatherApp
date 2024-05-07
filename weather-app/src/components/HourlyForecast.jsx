import '../styles/HourlyForecast.css'

const HourlyForecast = ({ forecast }) => {

    // console.log(forecast.temp.day);
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
    
    // console.log(forecast.main.temp);

    return (
        <div className="hourly-forecast">
            {/* <p>{formatDateTime(forecast.dt)}</p> */}
            {/* {forecast.weather && forecast.weather[0] && (
                <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt={forecast.weather[0].description}
                />
            )} */}
            <p className="temp">{formatToFarenheit(forecast.main.temp)}&deg;</p>
        </div>
    )
}

export default HourlyForecast