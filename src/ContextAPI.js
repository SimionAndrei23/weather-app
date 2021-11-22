
import { createContext, useReducer } from "react"

export const ContextWrapper = createContext();

const initialThemeSwitch = { darkMode: false}

const initialStatsWeather = {

    lat: '',
    long: '',
    currentStats: {}
}

const themeReducer = (state1 = initialThemeSwitch,action) => {
    switch(action.type) {
          case 'LightMode':
            return { darkMode: false}
          case 'DarkMode':
             return { darkMode: true}
          default:
              return state1;
    }
}

const statsWeatherReducer = (state2 = initialStatsWeather, action) => {
    switch(action.type) {
        case 'Lat_Coords':
          return {
              ...state2,
              lat: action.payload
          }
        case 'Long_Coords':
           return {
               ...state2,
               long: action.payload
           }
         case 'Current_Stats':
             return {
                 ...state2,
                 currentStats: action.payload
             }
        default:
            return state2;
  }
}

export function ThemeProvider(props) {
    const [stateTheme,dispatchTheme] = useReducer(themeReducer, initialThemeSwitch)
    const [stateWeather, dispatchWeather] = useReducer(statsWeatherReducer, initialStatsWeather)

    return (
        <ContextWrapper.Provider value={{ stateTheme: stateTheme, dispatchTheme: dispatchTheme, stateWeather: stateWeather, dispatchWeather: dispatchWeather }}>
            {props.children}
        </ContextWrapper.Provider>
    )
}