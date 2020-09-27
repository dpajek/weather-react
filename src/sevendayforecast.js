import React from "react";

import ForecastCard from "./forecastcard";
import "./sevendayforecast.css";

export default class SevenDayForecast extends React.Component {
  render() {
    return (
      <div className="seven-day-forecast">
        <ForecastCard />
        <ForecastCard selected={true} />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    );
  }
}
