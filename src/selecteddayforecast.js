import React from "react";

import "./selecteddayforecast.css";

import HourlyForecast from "./hourlyforecast";

export default class SelectedDayForecast extends React.Component {
  render() {
    const { day, hourly } = this.props;
    const temp = Math.round(day.temp.day);
    const high = Math.round(day.temp.max);
    const low = Math.round(day.temp.min);
    const feelsLike = Math.round(day.feels_like.day);
    const description = day.weather[0].description;
    const humidity = day.humidity;
    const pop = day.pop * 100;
    const date = new Date(day.dt * 1000).toDateString();
    const dateNumber = new Date(day.dt * 1000).getDate();

    const hourlyForecast =
      hourly !== null ? (
        <div className="hourly">
          Hourly Forecast
          <HourlyForecast hourly={hourly} currentDateNumber={dateNumber} />
        </div>
      ) : null;

    return (
      <div className="selected-day-forecast">
        <div className="details">
          {date}
          <div className="main-temp">{temp}&deg;</div>
          <div className="left-details">
            <div className="detail">Feels like {feelsLike}</div>
            <div className="detail">High: {high}</div>
            <div className="detail">Low: {low}</div>
          </div>
          <div className="right-details">
            <div className="detail">{description}</div>
            <div className="detail">Humidity: {humidity}%</div>
            <div className="detail">POP: {pop}%</div>
          </div>
        </div>
        {hourlyForecast}
      </div>
    );
  }
}
