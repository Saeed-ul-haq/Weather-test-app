import {
  GET_FORECAST_DATA,
  GET_CURRENT_WEATHER_DATA,
  SET_IS_LOADING,
  SET_IS_LOADING_TRUE,
} from "../actions";

const initialState = {
  weatherData: {},
  foreCastData: [],
  isLoading: false,

};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_DATA: {
      return {
        ...state,
        weatherData: action.data,
        isLoading: action.loadingTrue,
      };
    }
    case GET_FORECAST_DATA: {
      return {
        ...state,
        foreCastData: [...action.data],
        isLoading: action.loadingTrue,
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_IS_LOADING_TRUE: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
};
export default weatherReducer;
