import React from "react";

import ForecastCard from "./forecastcard";
import "./sevendayforecast.css";

export default class SevenDayForecast extends React.Component {
  render() {
    const { daily, selectedIndex } = this.props;

    if (daily === null) return null;

    const forecastCards = daily.map((day, i) => {
      return i < 7 ? (
        <ForecastCard
          key={i}
          day={day}
          selected={i === selectedIndex}
          onClick={() => this.props.onClick(i)}
        />
      ) : null;
    });

    return <div className="seven-day-forecast">{forecastCards}</div>;
  }
}
