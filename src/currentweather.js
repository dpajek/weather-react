import React from "react";
import "./currentweather.css";

export default class CurrentWeather extends React.Component {
  render() {
    const { current } = this.props;

    const temp = current !== null ? Math.round(current.temp) : "--";
    const feelsLike = current !== null ? Math.round(current.feels_like) : "--";
    const icon = current !== null ? current.weather[0].icon : null;
    const description =
      current !== null ? current.weather[0].description : null;

    const weatherIcon =
      icon !== null ? (
        <img
          className="weather-icon"
          alt={description}
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        />
      ) : null;

    return (
      <div className="current-weather">
        {weatherIcon}
        <div className="temp">
          <span>{temp}&deg;C</span>
          <div className="feels-like">Feels like {feelsLike}</div>
        </div>
      </div>
    );
  }
}
