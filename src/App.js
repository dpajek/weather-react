import React from "react";
import "./App.css";

import axios from "axios";

import CurrentWeather from "./currentweather";
import SevenDayForecast from "./sevendayforecast";
import SelectedDayForecast from "./selecteddayforecast";
import FixedHeader from "./fixedheader";

import { APIKEY } from "./constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hourly: null,
      daily: null,
      current: null,
      selectedIndex: 0,
      currentMain: "",
    };
  }

  getMainCode(currentMain) {
    console.log(currentMain);
    if (currentMain === "Snow" || currentMain === "Thunderstorm")
      return currentMain;
    if (
      currentMain === "Drizzle" ||
      currentMain === "Clouds" ||
      currentMain === "Rain"
    )
      return "Clouds";
    return "Clear";
  }

  componentDidMount() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=oakville,ca&units=metric&appid=" +
          APIKEY
      )
      .then((firstResponse) => {
        console.log(firstResponse.data);
        const lat = firstResponse.data.coord.lat;
        const lon = firstResponse.data.coord.lon;
        const currentMain = this.getMainCode(firstResponse.data.weather[0].main);

        this.setState({ currentMain: currentMain });

        const query = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${APIKEY}&units=metric`;

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
    const { current, daily, hourly, selectedIndex, currentMain } = this.state;

    const selectedDayForecast =
      daily !== null ? (
        <SelectedDayForecast
          day={daily[selectedIndex]}
          hourly={
            selectedIndex < 2
              ? hourly//.slice(24 * selectedIndex, 24 * (1 + selectedIndex))
              : null
          }
        />
      ) : null;

      const backgroundClass = "App " + currentMain;


    return (
      <div className={backgroundClass}>
        <h1>Oakville, ON</h1>
        <CurrentWeather current={current} />
        <SevenDayForecast
          daily={daily}
          selectedIndex={selectedIndex}
          onClick={(i) => this.handleForecastCardClick(i)}
        />
        {selectedDayForecast}
        <FixedHeader current={current} currentMain={currentMain} />
      </div>
    );
  }
}

export default App;
