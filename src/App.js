import React from "react";
import "./App.css";

import CurrentWeather from "./currentweather";
import SevenDayForecast from "./sevendayforecast";
import SelectedDayForecast from "./selecteddayforecast";

function App() {
  return (
    <div className="App">
      <h1>Oakville, ON</h1>
      <CurrentWeather />
      <SevenDayForecast />
      <SelectedDayForecast />
    </div>
  );
}

export default App;
