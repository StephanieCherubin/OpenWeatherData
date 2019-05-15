/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Temperature from './Temperature';
import Atmosphere from './Atmosphere';
import WeatherDescription from './WeatherDescription';
import './Weather.css';

function Weather(props) {
  const { weatherData } = props;

  const { icon } = weatherData.weather[0];

  return (
    <div className="Weather">
      <Temperature weatherData={weatherData} />
      <Atmosphere weatherData={weatherData} />
      <WeatherDescription weatherData={weatherData} />
      <div>
Icon:
        {' '}
        {icon}
      </div>
    </div>
  );
}

export default Weather;
