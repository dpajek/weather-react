import React from "react";
import "./App.css";

import axios from "axios";

import CurrentWeather from "./currentweather";
import SevenDayForecast from "./sevendayforecast";
import SelectedDayForecast from "./selecteddayforecast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hourly: null,
      daily: null,
      current: null,
      selectedIndex: 0,
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=oakville,ca&units=metric&appid=da4ae7b36217a0da6389f022926ce444"
      )
      .then((firstResponse) => {
        console.log(firstResponse.data);
        const lat = firstResponse.data.coord.lat;
        const lon = firstResponse.data.coord.lon;

        const query = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=da4ae7b36217a0da6389f022926ce444&units=metric`;

        axios
          .get(query)
          .then((response) => {
            console.log(response.data);
            this.setState({
              hourly: response.data.hourly,
              daily: response.data.daily,
              current: response.data.current,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleForecastCardClick(i) {
    this.setState({
      selectedIndex: i,
    });
  }

  render() {
    const { current, daily, hourly, selectedIndex } = this.state;

    const selectedDayForecast =
      daily !== null ? (
        <SelectedDayForecast
          day={daily[selectedIndex]}
          hourly={
            selectedIndex < 2
              ? hourly.slice(24 * selectedIndex, 24 * (1 + selectedIndex))
              : null
          }
        />
      ) : null;

    return (
      <div className="App">
        <h1>Oakville, ON</h1>
        <CurrentWeather current={current} />
        <SevenDayForecast
          daily={daily}
          selectedIndex={selectedIndex}
          onClick={(i) => this.handleForecastCardClick(i)}
        />
        {selectedDayForecast}
      </div>
    );
  }
}

export default App;
