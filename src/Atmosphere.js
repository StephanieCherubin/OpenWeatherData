/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Atmosphere(props) {
  const { weatherData } = props;
  const { humidity, pressure } = weatherData.main;

  return (
    <div>
      <div>
Humidity:
        {' '}
        { humidity }
        {' '}
      </div>
      <div>
Pressure:
        {' '}
        { pressure }
      </div>
    </div>
  );
}

export default Atmosphere;
