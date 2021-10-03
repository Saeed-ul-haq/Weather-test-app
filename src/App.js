import { useState } from "react";
import { connect } from "react-redux";
import { getCurrentWeatherData, getForeCastData,getCurrentWeatherDatafromZipCode } from "./actions";
import "./App.css";
import Button from "./components/Buttons/Button";
import DailyForecast from "./components/Forecasts/DailyForecast";
import WeeklyForcast from "./components/Forecasts/WeeklyForcast";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import { toCelcius } from "./utils/tempConverter";

const App = ({
  getWeatherData,
  weatherData,
  isLoading,
  getWeaklyForecast,
  ...props
}) => {
  const {
    name,
    sys,
    main = { temp: 0 ,pressure: "",humidity: "",temp_max: "",temp_min: ""},
    weather = [{ description: "", icon: "" }],
    clouds,
  } = weatherData;
  const [city, setcity] = useState("");

  const searchInputHandler = (e) => {
    e.preventDefault();
    setcity(e.target.value);
    // getWeaklyForecast(e.target.value);
    getWeatherData(e.target.value);
  };

  console.log("weather data  ", weatherData);
  // if (isLoading) return <p>Loading...</p>;
  const fetchData = () => {
    getWeaklyForecast(city);
    // getWeatherData(city);
  };
  return (
    <div className="App">
      <Navbar />
      <SearchInput onChange={searchInputHandler} fetchData={fetchData} />
      <div className="weather-statistics">
        <div className="forecast card">
          <DailyForecast
            city={name}
            country={sys === undefined ? "undefined" : sys.country}
            min={main.temp_min}
            max={main.temp_max}
            temperature={main.temp}
            pressure={main.pressure}
            humidity={main.humidity}
            weatherCondition={
              weather === undefined ? "undefined" : weather[0].description
            }
            clouds={clouds === undefined ? "undefined" : clouds.all}
            icon={weather[0].icon}
          />
          <WeeklyForcast city={name} />
        </div>
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

            <p className='temp-meter'>
              <span> Farhenhite: {main.temp}</span>
              <span> Celcius: {toCelcius(main.temp)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default App;
const mapStateToProps = (state) => {
  return {
    weatherData: state.weather.weatherData,
    isLoading: state.weather.isLoading,
    foreCastData: state.weather.foreCastData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWeatherData: (city) => dispatch(getCurrentWeatherData(city)),
  getWeaklyForecast: (city) => dispatch(getForeCastData(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
