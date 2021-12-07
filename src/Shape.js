import React, { useContext } from 'react'
import './App.css';
import scheduleIcon from './files/schedule-icon.png'
import moonIcon from './files/moon_icon.png'
import sunIcon from './files/sun_icon.png'
import globeIcon from './files/globe_icon.png'
import windIcon from './files/wind_icon.png'
import humidityIcon from './files/humidity_icon.png'
import { ContextWrapper} from './ContextAPI'



const Shape = () => {

    const theme = useContext(ContextWrapper);
    const currentStats = theme.stateWeather.currentStats
    const darkMode = theme.stateTheme.darkMode
    const dayName = new Date(currentStats?.current?.dt * 1000).toLocaleDateString('en', {
        weekday: 'long'
    });
    const changeToCelsius = +(currentStats?.current?.temp.toFixed(0))
    const changeToFahrenheit = +((changeToCelsius * 9.0/5.0) + 32.0) 
    const string = currentStats?.current?.weather[0]?.description
    const capitalizedString = string?.charAt(0).toUpperCase() + string?.slice(1)
    const windSpeed = +(currentStats?.current?.wind_speed)
    const humidity = +(currentStats?.current?.humidity)

    const handleThemeToggle = () => {
        if(darkMode) {
            theme.dispatchTheme({ type: 'LightMode'});
        }
        else {
            theme.dispatchTheme({ type: 'DarkMode'})
        }
    }

    return (
        <div className = {`${darkMode ? 'shapeContainerON' : 'shapeContainerOFF'}`} >
            <div className = 'header'>
                <p>Calendar</p>
                <div className = 'calendarContainer'>
                    <div className = 'calendarImage'>
                        <img src = {scheduleIcon} alt = 'calendarIcon'  />
                    </div>
                    <span>7</span>
                    <span>days</span>
                </div>
                <div>
                    <input type = 'checkbox' id = 'checkbox' />
                    <label for="checkbox" className = 'labelSwitch' onClick = {handleThemeToggle}>
                            <div className = 'iconImage'>
                                <img src = {moonIcon} alt = 'moonIcon' />
                            </div>
                            <div className = 'iconImage'>
                                <img src = {sunIcon} alt = 'sunIcon' />
                            </div>
                            <div className="ball"></div>
                    </label>
                </div>
            </div>
           <div className = 'weatherContainer'>
                <div className = 'imageWeather'>
                    <div className = 'image'>
                        <img src = {`http://openweathermap.org/img/w/${currentStats?.current?.weather[0]?.icon}.png`} />  
                    </div>
                </div>
                <div className = 'tommorow'>
                    <div className = 'tommorowStats'>
                        <div className = 'today'>
                            <h3>Today</h3>
                            <span>/ {dayName}</span>
                        </div>
                        <div className = 'temperature'>
                            <h1>{changeToCelsius}{'°'}{'C'}</h1>
                            <span> / {changeToFahrenheit}{'°'}{'F'}</span>
                        </div>
                        <span>{capitalizedString}</span>
                    </div>
                </div>
           </div>
                <div className = 'stats'>
                    <div className = 'statsTemperature'>
                        <div className = 'imageIcon'>
                            <img src = {globeIcon} alt = 'globeIcon' />
                        </div>
                        <p>Timezone</p>
                        <span>{currentStats?.timezone}</span>
                    </div>
                    <div className = 'statsTemperature'>
                        <div className = 'imageIcon'>
                            <img src = {windIcon} alt = 'windIcon' />
                        </div>
                        <p> {windSpeed}km/h</p>
                        <span>Wind</span>
                    </div>
                    <div className = 'statsTemperature'>
                        <div className = 'statsTemperature'>
                            <div className = 'imageIcon'>
                                <img src = {humidityIcon} alt = 'humidityIcon' />
                            </div>
                            <p>{humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Shape

