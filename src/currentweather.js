import React from "react";
import "./currentweather.css";

export default class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="current-weather">
        <img
          className="weather-icon"
          alt="Weather description"
          src="http://openweathermap.org/img/wn/10d@4x.png"
        />
        <div className="temp">
          25&deg;C
          <div className="feels-like">Feels like 31&deg;C</div>
        </div>
      </div>
    );
  }
}
