import React from "react";

import "./forecastcard.css";

export default class ForecastCard extends React.Component {

  render() {
    const {selected} = this.props;
    const card_class = selected?"forecast-card forecast-card-selected":"forecast-card";

    return (
      <div className={card_class}>
        <div className="week-day">Tue</div>
        <img
          className="weather-icon"
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="Weather description"
        />
        <div className="high-low">H: 30 | L: 23</div>
      </div>
    );
  }
}
