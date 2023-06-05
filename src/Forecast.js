import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Forecast() {
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  let [forecast, setForecast] = useState(null);
  let [forecastHTML, setforecastHTML] = useState(null);

  function displayForecast(response) {
    let forecast = response.data.daily;
    setForecast(forecast);

    let forecastHTML = ` <div class="row">`;

    forecast.forEach(function (forecastDay, index) {
      if (index < 5) {
        let day = forecastDay.dt;
        let icon = forecastDay.weather[0].icon;
        let maxTemperature = Math.round(forecastDay.temp.max);
        let minTemperature = Math.round(forecastDay.temp.min);
        forecastHTML =
          forecastHTML +
          `
      <div class="col border border-secondary rounded forecast-col">
        <div class="weather-forecast-date">${formatDay(day)}</div>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="" width="42"/>
        <div calss="weather-forecast-temperature">
          <span class="weather-forecast-temperature-maximum">${maxTemperature}° </span>
          <span class="weather-forecast-temperature-minimum">${minTemperature}°</span>
        </div>
      </div>
`;
      }
    });
    forecastHTML = forecastHTML + `</div>`;
    setforecastHTML(forecastHTML);
  }

  function getForecast(coordinates) {
    let url = "https://api.openweathermap.org/data/2.5/onecall?";
    let units = "metric";
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let apiUrl = `${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayForecast);
  }

  return (
    <div className="row">
      <div className="col">
        <div>Sat</div>
        <div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={50}
            animate={true}
          />
        </div>
        <div>15°C</div>
      </div>
    </div>
  );
}
