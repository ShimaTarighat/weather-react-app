import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
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
