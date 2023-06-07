import React, { useState } from "react";
import Weather from "./Weather";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, showMessage] = useState(false);
  let [weatherData, setWeatherData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      showMessage(true);
      let url = "https://api.openweathermap.org/data/2.5/weather?";
      let appid = "8d9838178b5b401f1b4e7cb5af18e210";
      let units = "metric";
      let apiUrl = `${url}q=${city}&appid=${appid}&units=${units}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert(`Enter a city`);
    }
  }

  if (message) {
    return (
      <div className="Search ">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="m-3 p-2 rounded"
            onChange={(event) => {
              setCity(event.target.value);
              showMessage(false);
            }}
          />
          <input type="submit" value="search" className=" p-2 rounded" />
        </form>
        <Weather city={city} weatherData={weatherData} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }
}
