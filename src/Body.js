import React, { useContext } from 'react'
import './App.css';
import  temperatures   from './data/temperatures'


const Body = ({ currentStats }) => {

    const arr = currentStats?.daily

    const finalArr = arr?.slice(1,arr.length)


    return (
        <div className = 'bodyContainer'>
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
                        <span> {(currentStat.temp.day - 273.15).toFixed(0)}{'°'}{'C'} </span>
                        <span> / {(currentStat.temp.night - 273.15).toFixed(0)}{'°'}{'C'} </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Body
