import React from "react";

import "./hourlyforecast.css";

export default class HourlyForecast extends React.Component {
  HourlyForecastRow() {
    return (
      <li className="row">
        5 PM
        <img
          className="weather-icon"
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="Weather description"
        />
        <div className="temp">24&deg;C</div>
        <div className="feels-like">Feels like 31&deg;C</div>
        <div className="POP">POP: 15%</div>
      </li>
    );
  }

  render() {
    return (
      <ul className="hourly-forecast">
        {this.HourlyForecastRow()}
        {this.HourlyForecastRow()}
        {this.HourlyForecastRow()}
        {this.HourlyForecastRow()}
        {this.HourlyForecastRow()}
        {this.HourlyForecastRow()}
        {this.HourlyForecastRow()}
      </ul>
    );
  }
}
