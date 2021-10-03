import React from "react";
import { toCelcius } from "../../utils/tempConverter";
import Button from "../Buttons/Button";

export default function WeatherStatistics({temp}) {
  return (
    <div className="statistics card">
      <div className="weatherMap">
        <div className="buttonContainer">
          <Button
          
            className="btn btn-outline-success text-white"
            text="Clouds"
          />
          <Button
            className="btn btn-outline-warning text-white"
            text="Precipitation"
          />
          <Button
            className="btn btn-outline-primary text-white"
            text="Temperature"
          />
        </div>
        <div className="map">Map</div>
      </div>
      <div className="temp-converted">
        <p>Temperature Converter</p>

        <p className="temp-meter">
          <span> Farhenhite: {temp}&deg; F</span>
          <span>
            {" "}
            Celcius:<br></br> {toCelcius(temp)}&deg; C
          </span>
        </p>
      </div>
    </div>
  );
}
