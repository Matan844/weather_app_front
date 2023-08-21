import '../style/weather_card.css';

function WeatherInfo(props) {
const weatherData = props.weatherData 

  return (
    <div className='weather_card'>
     {weatherData && (
    <div className='card'>
      <div className='topcard'><p>{weatherData.city}</p><p>{weatherData.country}</p></div>
     <div className='deg'> <p>{weatherData.celtemp}&deg;</p> </div>
      <div className='button'>
      <div><p>Precipitation</p>
      <p>{weatherData.wind_kph} Km/h</p></div>
      <div><p>Humidity</p>
      <p>{weatherData.humidity}%</p></div>
     <div> <p>Wind</p>
      <p>{weatherData.precip_mm} mm</p></div>
      </div>
    </div>
     )}
    </div>
  );
}

export default WeatherInfo;
