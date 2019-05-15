/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import Weather from './Weather';
import ErrorMessage from './ErrorMessage';
import './App.css';

/**
 * This example illustrates a simple react project
 * that works with an external API.
 *
 * Take note of the comments they point common
 * problems you will need to solve with React.
 *
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components
 *
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component.
 *
 * */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '', // Used to hold value entered in the input field
      weatherData: null, // Used to hold data loaded from the weather API
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    // Get the zip from the input
    const { inputValue: zip } = this.state;
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`;
    fetch(url).then((res) => {
      return res.json();
    }).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({ weatherData: json });
      // console.log(weatherData.main);
      // ! This needs better error checking here or at renderWeather()
      // It's possible to get a valid JSON response that is not weather
      // data, for example when a bad zip code entered.
    }).catch((err) => {
      // If there is no data
      this.setState({ weatherData: null }); // Clear the weather data we don't have any to display
      console.log(`-- Error fetching --${err.message}`);
    });
  }

  renderWeather() {
    const { weatherData } = this.state;
    // This method returns undefined or a JSX component
    if (weatherData === null) {
      // If there is no data return undefined
      return undefined;
    }

    if (weatherData.cod === '404' || weatherData.cod === '400') {
      return <ErrorMessage message={weatherData.message} />;
    }
    /*
    This next step needs another level of error checking. It's
    possible to get a JSON response for an invalid zip in which
    case the step below fails.
    */
    return <Weather weatherData={weatherData} />;
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <nav>
          <p>Check the Weather</p>
        </nav>
        <div className="App">
          {/** This input uses the controlled component pattern */}

          <form className="form" onSubmit={e => this.handleSubmit(e)}>

            {/**
            This pattern is used for input and other form elements
            Set the value of the input to a value held in component state
            Set the value held in component state when a change occurs at the input
            */}
            <label htmlFor="zip" className="label">
            Enter Zip Code
              <br />
              <br />
              <input
                id="zip"
                value={inputValue}
                onChange={e => this.setState({ inputValue: e.target.value })}
                type="text"
                pattern="(\d{5}([\-]\d{4})?)"
                placeholder="90210"
              />
              <button className="submit" type="submit">Enter</button>
            </label>
          </form>

          {/** Conditionally render this component */}
          {this.renderWeather()}

          <footer>
            <p>Created by Stephanie Cherubin</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
