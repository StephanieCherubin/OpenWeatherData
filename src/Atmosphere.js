import React from 'react';

function Atmosphere(props) {
    const { humidity, pressure } = props.weatherData.main

    return (
        <div>
            <div>Humidity: { humidity } </div>
            <div>Pressure: { pressure }</div>
        </div>
    )
}

export default Atmosphere