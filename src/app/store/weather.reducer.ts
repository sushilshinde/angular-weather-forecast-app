import { createReducer, on } from '@ngrx/store';
import { WeatherData } from '../model/weather.model';
import {
  SET_ACTIVE_WEATHER_REPORT,
  WEATHER_DATA_REQUEST,
} from './weather.actions';
import { initialState } from './weather.state';

export interface WeatherState {
  weather: WeatherData;
  activeWeatherReport: string;
}

const weatherStateData: WeatherState = {
  weather: initialState,
  activeWeatherReport: 'rain',
};

export const WeatherReducer = createReducer(
  weatherStateData,
  on(WEATHER_DATA_REQUEST, (state, action) => ({
    ...state,
    weather: action.weather,
  })),
  on(SET_ACTIVE_WEATHER_REPORT, (state, action) => ({
    ...state,
    activeWeatherReport: action.activeReport,
  }))
);
