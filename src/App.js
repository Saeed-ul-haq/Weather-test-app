import { useState } from "react";
import { connect } from "react-redux";
import {
  getCurrentWeatherData,
  getForeCastData,
  getCurrentWeatherDatafromZipCode,
} from "./actions";
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
  getWeatherDataByZip,
  isLoading,
  getWeaklyForecast,
  ...props
}) => {
  const {
    name,
    sys,
    main = { temp: 0, pressure: "", humidity: "", temp_max: "", temp_min: "" },
    weather = [{ description: "", icon: "" }],
    clouds,
  } = weatherData;
  const [city, setcity] = useState("");
  const [searchBy, setsearchBy] = useState("city Name");
  const [zipCodeParameter, setzipCodeParameter] = useState({
    cityCode: "",
    countryCode: "",
  });

  // ============================================================================
  //                                      Search function
  //=============================================================================

  const searchInputHandler = (e) => {
    e.preventDefault();
    if (searchBy === "city Name") {
      setcity(e.target.value);
      fetchData();
    } else if (searchBy === "city ID") {
      setzipCodeParameter({
        ...zipCodeParameter,
        [e.target.name]: e.target.value,
      });
      fetchData();
    }
  };

  // ============================================================================
  //                                      FetchDat function
  //=============================================================================

  const fetchData = () => {
    if (searchBy === "city Name") {
      getWeatherData(city);
    } else if (searchBy === "city ID") {
      getWeatherDataByZip(zipCodeParameter.cityCode,zipCodeParameter.countryCode);
    }
  };

  // ============================================================================
  //                                      onClick search function
  //=============================================================================

  const selectHandler = (e) => {
    e.preventDefault();
    setsearchBy(e.target.value);
  };

  return (
    <div className="App">
      <Navbar />
      <SearchInput
        onChange={searchInputHandler}
        fetchData={fetchData}
        searchBy={searchBy}
        onselectChange={selectHandler}
      />
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

            <p className="temp-meter">
              <span> Farhenhite: {main.temp}&deg; F</span>
              <span> Celcius:<br></br> {toCelcius(main.temp)}&deg; C</span>
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
  getWeatherDataByZip: (cityCod, countryCode) =>
    dispatch(getCurrentWeatherDatafromZipCode(cityCod, countryCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
