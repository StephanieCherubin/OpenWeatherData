import React from 'react'

function WeatherDescription(props) {
    const { main, description} = props.weatherData.weather[0]

    return (
        <div>
            <div>Title: { main }</div>
            <div>Desc: { description }</div>
        </div>
    )
}

export default WeatherDescription