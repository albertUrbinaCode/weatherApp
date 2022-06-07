import React, {useState} from 'react'
import '../App.css'

const CardWeather = ({weather, temperature}) => {

const [isCelcius, setIsCelcius] = useState(true)
const changeTemperature = () => setIsCelcius(!isCelcius)

  return (
    <div className="cardBox">
        <h1>Weather App</h1>
        <h3>Ciudad {weather?.name}, {weather?.sys.country}</h3>
        <div className='info'>
            <section className='icon'>  
                <img className='logo' src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png` } alt='Icon Weather' />
            </section>
            <section className='aditionalInfo'>
            <h4><b>"{weather?.weather[0].description}"</b></h4>
            <h4> Wind speed: <span className='dataColor'>{weather?.wind.speed}</span></h4>
            <h4>Clouds: <span className='dataColor'>{weather?.clouds.all}%</span></h4>
            <h4>Pressure: <span className='dataColor'>{weather?.main.pressure}</span></h4>
            </section>
        </div>
        <h2 className='temperature'>Temperature: <span className='dataColor'>{isCelcius ? `${temperature?.celcius} °C` : `${temperature?.fahrenheit} °F`}</span></h2>
        <button className='btn' onClick={changeTemperature}>Change to {isCelcius ? 'Fahrenheit' : 'Celcius'}</button>
    </div>
  )
}

export default CardWeather