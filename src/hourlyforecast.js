import React from "react";

import "./hourlyforecast.css";

export default class HourlyForecast extends React.Component {
  HourlyForecastRow(hour, i) {
    const temp = Math.round(hour.temp);
    const icon = hour.weather[0].icon;
    const description = hour.weather[0].description;
    const feelsLike = Math.round(hour.feels_like);
    const pop = Math.round(hour.pop * 100);
    const time = new Date(hour.dt * 1000).getHours();

    const weatherIcon =
      icon !== null ? (
        <img
          className="weather-icon"
          alt={description}
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      ) : null;

    return (
      <li className="row" key={i}>
        {time === 12
          ? "Noon"
          : time === 0
          ? "Midnight"
          : time < 12
          ? `${time} AM`
          : `${time - 12} PM`}
        {weatherIcon}
        <div className="temp">{temp}&deg;</div>
        <div className="feels-like">Feels like {feelsLike}</div>
        <div className="POP">POP: {pop}%</div>
      </li>
    );
  }

  render() {
    const { hourly } = this.props;

    const hourlyForecastRows = hourly.map((hour, i) => {
      return this.HourlyForecastRow(hour, i);
    });

    return <ul className="hourly-forecast">{hourlyForecastRows}</ul>;
  }
}
