import { useState, useEffect, useContext } from 'react' 
import './App.css'
import Shape from './Shape'
import Body from './Body'
import {Context} from "./ContextAPI"
import { ContextWrapper } from './ContextAPI'

function App() {

  const theme = useContext(ContextWrapper);

  const darkMode = theme.stateTheme.darkMode

  //const [theme, setTheme] = useState(false)


  const lat = theme.stateWeather.lat

  const long = theme.stateWeather.long

  useEffect(async () => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          theme.dispatchWeather({ type: 'Lat_Coords', payload: position.coords.latitude })
          theme.dispatchWeather({ type: 'Long_Coords', payload: position.coords.longitude })
        })
      }

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=` + 'c43e90e680e057b9972dac0bc698453f')
      .then(result => result.json())
      .then(data => theme.dispatchWeather({ type: 'Current_Stats', payload: data}))
  },[lat,long])

  return (
      <div className={`${darkMode ? 'AppON': 'AppOFF'}`}>
        <Shape />
        <Body />
      </div>
  );
}

export default App;
