/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import './Temperature.css';

function Temperature(props) {
  const { weatherData } = props;
  const { temp, temp_min, temp_max } = weatherData.main;

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
        { Math.ceil(9 / 5 * (temp_min - 273) + 32) }
        {' '}
F /
        {' '}
        {Math.ceil(temp_min - 273.15)}
        {' '}
C
        {' '}
      </div>
      <div>
Temperature Highs:
        {' '}
        { Math.ceil(9 / 5 * (temp_max - 273) + 32) }
        {' '}
F /
        {' '}
        {Math.ceil(temp_max - 273.15)}
        {' '}
C
        {' '}
      </div>
    </div>
  );
}

export default Temperature;
