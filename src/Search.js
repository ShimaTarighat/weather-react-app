import React, { useState } from "react";
import Weather from "./Weather";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [message, showMessage] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      showMessage(true);
    } else {
      alert(`Enter a city`);
    }
  }

  if (message) {
    return (
      <div className="Search">
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
        <Weather city={city} />
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
