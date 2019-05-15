/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './WeatherDescription.css';

function WeatherDescription(props) {
  const { weatherData } = props;
  const { main, description } = weatherData.weather[0];

  return (
    <div className="WeatherDescription">
      <div>
Title:
        {' '}
        {main}
      </div>
      <div>
Desc:
        {' '}
        {description}
      </div>
    </div>
  );
}

export default WeatherDescription;
