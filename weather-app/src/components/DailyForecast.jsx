import '../styles/DailyForecast.css'

const DailyForecast = ({ forecast }) => {

    // console.log(forecast.temp.day);
    const formatToFarenheit = (temp) => {
        return parseInt((temp - 273.15) * (9/5) + 32)
    }

    return (
        <div className="daily-forecast">
            <p>{formatToFarenheit(forecast.temp.day)}</p>
        </div>
    )
}

export default DailyForecast