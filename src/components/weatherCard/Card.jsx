import React from "react";

export default function WeatherCard({ day, date, condition, temp,icon,index }) {
  return (
    <div class={`carousel-item text-center ${index === 4 && `active`} `}>
      <div className="weather-card">
        <p>{day} , {date}</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          width="50px"
          height="50px"
          alt=""
        />
        <p>{condition}</p>
        <p className="font-weight-light mb-0">{temp} &deg;</p>
        <p className="mb-0">{temp} &deg;</p>
      </div>
    </div>
  );

}
// WeatherCard.defaultProps = {
//   day: "Mon",
//   date: "08 oct",
//   condition: "overcast",
//   temp: 45,
// };

