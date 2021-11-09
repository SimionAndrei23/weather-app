import { useState, useEffect } from 'react' 
import './App.css';
import Shape from './Shape';
import Body from './Body';
import {ThemeContext} from "./Theme";

function App() {

  const [theme, setTheme] = useState(false)

  const [lat, setLat] = useState('')

  const [long, setLong] = useState('')

  const [currentStats, setCurrentStats] = useState()

  
  useEffect(async () => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
        })
      }

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=` + 'c43e90e680e057b9972dac0bc698453f')
      .then(result => result.json())
      .then(data => setCurrentStats(data))
  },[lat,long])

  return (
    <ThemeContext.Provider value = {{theme, setTheme}}>
      <div className={`${theme ? 'AppON': 'AppOFF'}`}>
        <Shape currentStats = {currentStats} />
        <Body currentStats = {currentStats} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
