import Axios from "axios";
export const GET_CURRENT_WEATHER_DATA = "GET_CURRENT_WEATHER_DATA";
export const GET_WEATHER_ITEM = "GET_WEATHER_ITEM";
export const GET_FORECAST_DATA = "GET_FORECAST_DATA";
export const SET_IS_LOADING_TRUE = "SET_IS_LOADING_TRUE";
export const SET_IS_LOADING = "SET_IS_LOADING";
const API_KEY = "115000572c8be69a3e497e0096b6ae04";

export const saveWeatherData = (data) => ({
  type: GET_CURRENT_WEATHER_DATA,
  data: data,
  loadingTrue: false,
});

export const setIsLoadingTrue = () => ({
  type: SET_IS_LOADING_TRUE,
});
export const setIsLoading = () => ({
  type: SET_IS_LOADING,
});

export const saveForecastData = (data) => ({
  type: GET_FORECAST_DATA,
  data: data,
  loadingTrue: false,
});

export const getForeCastData =
  (city, zipCOde = 3434) =>
  async (dispatch) => {
    try {
      // dispatch(setIsLoadingTrue());
      await Axios.get(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${zipCOde}&cnt=5&appid=${API_KEY}`
      )
        .then((response) => {
          console.log("forecast data ", response.data);
          return dispatch(saveForecastData(response.data));
        })
        .catch((error) => {
          console.log("something went wrng", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

export const getCurrentWeatherData =
  (city) =>
  async (dispatch) => {
    try {
      await Axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${API_KEY}`
      )
        .then((response) => {
          return dispatch(saveWeatherData(response.data));
        })
        .catch((error) => {
          console.log("something went wrng", error);
        });
    } catch (error) {}
  };

  export const getCurrentWeatherDatafromZipCode =
  (zip,country_code) =>
  async (dispatch) => {
    try {
      await Axios.get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country_code}&appid=${API_KEY}`
      )
        .then((response) => {
          return dispatch(saveWeatherData(response.data));
        })
        .catch((error) => {
          console.log("something went wrng", error);
        });
    } catch (error) {}
  };
