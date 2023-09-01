import { useState } from 'react'
import './App.scss'
import Search from './componentes/Search/Search'
import WeatherBoxToday from './componentes/WeatherBoxToday/WeatherBoxToday'

function App() {
  const [place, setPlace] = useState('')
  const [weatherPlace, setWeatherPlace] = useState(null)
  const [imperial, setImperial] = useState(false)

  return (
    <div className="container">
      <Search
        weatherPlace={weatherPlace}
        setWeatherPlace={setWeatherPlace}
        place={place}
        setPlace={setPlace}
        imperial={imperial}
        setImperial={setImperial} />
      <WeatherBoxToday
        weatherPlace={weatherPlace}
        place={place}
        setPlace={setPlace}
        imperial={imperial}
        setImperial={setImperial} />
    </div>
  )
}

export default App
