import React from "react";

import "./forecastcard.css";

export default class ForecastCard extends React.Component {
  render() {
    const { day, selected } = this.props;
    const card_class = selected
      ? "forecast-card forecast-card-selected"
      : "forecast-card";

    //console.log(day);

    const high = Math.round(day.temp.max);
    const low = Math.round(day.temp.min);
    const icon = day.weather[0].icon;
    const description = day.weather[0].description;

    const weatherIcon =
      icon !== null ? (
        <img
          className="weather-icon"
          alt={description}
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        />
      ) : null;

    return (
      <div className={card_class} onClick={this.props.onClick}>
        <div className="week-day">Tue</div>
        {weatherIcon}
        <div className="high-low">
          H: {high} | L: {low}
        </div>
      </div>
    );
  }
}
