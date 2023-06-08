import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather({ city }) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    let temp = Math.round(response.data.main.temp);
    setTemperature(temp);
    let description = response.data.weather[0].description;
    setDescription(description);
    let humidity = response.data.main.humidity;
    setHumidity(humidity);
    let wind = Math.round(response.data.wind.speed);
    setWind(wind);
    let icon = response.data.weather[0].icon;
    setIcon(`http://openweathermap.org/img/wn/${icon}@2x.png`);
  }

  let url = "https://api.openweathermap.org/data/2.5/weather?";
  let appid = "8d9838178b5b401f1b4e7cb5af18e210";
  let units = "metric";
  let apiUrl = `${url}q=${city}&appid=${appid}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);

  if (temperature) {
    return (
      <div className="Weather m-4 text-start">
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li> Description: {description}</li>
          <li>Humidity:{humidity}%</li>
          <li>Wind: {wind}km/h</li>

          <li>
            <img src={icon} alt="weather icon" width="150" />
          </li>
        </ul>
      </div>
    );
  } else {
    return <p>"Type valid city"</p>;
  }
}
