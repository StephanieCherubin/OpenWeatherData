import React from 'react';
import Temperature from './Temperature'
import Atmosphere from './Atmosphere'
import WeatherDescription from './WeatherDescription';

function Weather(props) {
    // Take the weather data apart to more easily populate the component
    const { icon } = props.weatherData.weather[0]

    return (<div>
                <Temperature weatherData={props.weatherData}/>
                <Atmosphere weatherData={props.weatherData}/>
                <WeatherDescription weatherData={props.weatherData}/>
                <div>Icon: {icon}</div>
            </div>
      )
}

export default Weather;