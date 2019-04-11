import React from 'react';
import Temperature from './Temperature'
import Atmosphere from './Atmosphere'

function Weather(props) {
    // Take the weather data apart to more easily populate the component
    const { main, description, icon } = props.weatherData.weather[0]

    return (<div>
                <Temperature weatherData={props.weatherData}/>
                <Atmosphere weatherData={props.weatherData}/>
                <div>Title: {main}</div>
                <div>Desc: {description}</div>
                <div>Icon: {icon}</div>
            </div>
      )
}

export default Weather;