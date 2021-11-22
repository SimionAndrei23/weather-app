import React, { useContext } from 'react'
import './App.css';
import { Context } from './ContextAPI';
import { ContextWrapper} from './ContextAPI';

const Body = () => {

    const theme = useContext(ContextWrapper);

    const currentStats = theme.stateWeather.currentStats

    const arr = currentStats?.daily

    const finalArr = arr?.slice(1,arr.length)


    return (
        <div className = 'bodyContainer'>
            <div className = 'underText'> <h1> Made by Andrew </h1> </div>
            {finalArr?.map((currentStat,index) => (
                <div key = {index} className = 'dayWrapper'>
                    <span> {new Date(currentStat.dt * 1000).toLocaleDateString('en', {weekday: 'long'})} </span>
                    <div className = 'dayStats'>
                        <div className = 'imageStats'>
                            <img src = {`http://openweathermap.org/img/w/${currentStat.weather[0].icon}.png`} alt = 'imageWeather' />
                        </div>
                        <span> {currentStat.weather[0].main} </span>
                    </div>
                    <div className = 'dayTemp'>
                        <span> {(currentStat.temp.day.toFixed(0))}{'°'}{'C'} </span>
                        <span> / {(currentStat.temp.night.toFixed(0))}{'°'}{'C'} </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Body
