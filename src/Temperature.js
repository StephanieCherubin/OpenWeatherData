/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Temperature.css';

function Temperature(weatherData) {
  const { temp, tempMin, tempMax } = weatherData.main;

  return (
    <div>
      <div>
Temperature:
        {' '}
        { Math.ceil(9 / 5 * (temp - 273) + 32) }
        {' '}
F /
        {' '}
        {Math.ceil(temp - 273.15)}
        {' '}
C
      </div>
      <div>
Temperature Lows:
        { Math.ceil(9 / 5 * (tempMin - 273) + 32) }
        {' '}
F /
        {' '}
        {Math.ceil(tempMin - 273.15)}
        {' '}
C
        {' '}
      </div>
      <div>
Temperature Highs:
        {' '}
        { Math.ceil(9 / 5 * (tempMax - 273) + 32) }
        {' '}
F /
        {' '}
        {Math.ceil(tempMax - 273.15)}
        {' '}
C
        {' '}
      </div>
    </div>
  );
}

export default Temperature;
