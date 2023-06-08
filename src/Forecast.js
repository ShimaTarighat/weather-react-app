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
      <div className="col">
        <div>Sun</div>
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={50}
            animate={true}
          />
        </div>
        <div>15°C</div>
      </div>
      <div className="col">
        <div>Mon</div>
        <div>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="black"
            size={50}
            animate={true}
          />
        </div>
        <div>15°C</div>
      </div>
      <div className="col">
        <div>Tue</div>
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={50}
            animate={true}
          />
        </div>
        <div>15°C</div>
      </div>
      <div className="col">
        <div>Wed</div>
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
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
