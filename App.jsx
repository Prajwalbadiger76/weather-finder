import { useState } from 'react'
import './App.css'
import WeatherApp from '../WeatherApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br /> <br />
    <WeatherApp/>
    </>
  )
}

export default App
