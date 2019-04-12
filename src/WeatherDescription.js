import React from 'react';
import './WeatherDescription.css';

function WeatherDescription(props) {
    const { main, description} = props.weatherData.weather[0]

    return (
        <div className="WeatherDescription">
            <div>Title: { main }</div>
            <div>Desc: { description }</div>
        </div>
    )
}

export default WeatherDescription