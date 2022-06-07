import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './components/Loader'
import CardWeather from './components/CardWeather'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [temperature, setTemperature] = useState()

  useEffect(() => {
    const success = pos => {
      const long = pos.coords.longitude
      const lat = pos.coords.latitude
      setCoords({lat, long})
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  
  useEffect(() => {
    if(coords !== undefined){
      const API_KEY = '3d98f3ae0ca51db90f1809b152cacdc5'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${API_KEY}`

      axios.get(url)
        .then(res => {
          setWeather(res.data)
          setIsLoading(false)
          const celcius = (res.data.main.temp -273.15).toFixed(2)
          const fahrenheit =  (1.8*(res.data.main.temp - 273.15) + 32).toFixed(2)
          setTemperature({celcius, fahrenheit})
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className='App'>
      {
        isLoading ? 
        <Loader/>
        :
        <CardWeather temperature={temperature} weather={weather}/>
      }
    </div>
  )
}

export default App
