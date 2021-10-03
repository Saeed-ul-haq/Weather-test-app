import React from "react";
import MinMaxtemp from "../../utils/MinMaxtemp";
import { toCelcius } from "../../utils/tempConverter";

const DailyForecast = ({
  city,
  country,
  min,
  max,
  temperature,
  weatherCondition,
  icon,
}) => {
  return (
    <div className="dailyforecast">
      <p className="text-center">
        Today forecast for<b className='ml-2'>
          {city} {country}
        </b>
      </p>
      <div className="temperature">
        <div>
          <p>Current Temperature : {toCelcius(temperature)} &deg;C</p>
          <p>Weather Condition : {weatherCondition}</p>
          <MinMaxtemp min={min} max={max} />
        </div>
        <img className="weather-img" alt="cloudy weather" src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        />
      </div>
    </div>
  );
};

export default DailyForecast;
