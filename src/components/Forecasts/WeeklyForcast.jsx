import React, { useState } from "react";
import WeatherCard from "../weatherCard/Card";

const WeeklyForcast = ({ city, weeklyData }) => {
  const [foreCastData, setforeCastData] = useState([
    {
      day: "Mon",
      date: "04, oct",
      conditions: "overCast",
      temp: 45,
      icon: '01d'
    },
    {
      day: "Tue",
      date: "04, oct",
      conditions: "overCast",
      temp: 45,
      icon: '02d'
    },
    {
      day: "Wed",
      date: "04, oct",
      conditions: "overCast",
      temp: 45,
      icon: '03d'
    },
    {
      day: "Fri",
      date: "04, oct",
      conditions: "overCast",
      temp: 45,
      icon: '04d'
    },
    {
      day: "Thu",
      date: "04, oct",
      conditions: "overCast",
      temp: 45,
      icon: '09d'
    },
  ]);
  return (
    <div className="weekly-forecast">
      <p className="text-center">
        Weekly forecast for <b>{city}</b>
      </p>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          {foreCastData.map(({day,date,conditions,temp,icon},index) => {
            return <WeatherCard day={day} date={date} condition={conditions} temp={temp} icon={icon} index={index}/>;
          })}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default WeeklyForcast;
