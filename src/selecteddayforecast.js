import React from "react";

import "./selecteddayforecast.css";

import HourlyForecast from "./hourlyforecast";

export default class SelectedDayForecast extends React.Component {
  render() {
    return (
      <div className="selected-day-forecast">
        <div className="details">
          Saturday, September 26
          <div className="main-temp">25&deg;C</div>
          <div className="left-details">
            <div className="detail">Feels like 28&deg;C</div>
            <div className="detail">High: 35&deg;C</div>
            <div className="detail">Low: 22&deg;C</div>
          </div>
          <div className="right-details">
            <div className="detail">Raining</div>
            <div className="detail">Humidity: 85%</div>
            <div className="detail">POP: 15%</div>
          </div>
        </div>
        <div className="hourly">
          Hourly Forecast
          <HourlyForecast />
        </div>
      </div>
    );
  }
}
