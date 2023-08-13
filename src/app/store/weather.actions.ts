import { createAction, props } from '@ngrx/store';
import { WeatherData } from '../model/weather.model';

export const WEATHER_DATA_REQUEST = createAction(
  '[Weather] Weather Data Request',
  props<{ weather: WeatherData }>()
);
export const SET_ACTIVE_WEATHER_REPORT = createAction(
  '[Weather] Set Active Weather Report',
  props<{ activeReport: string }>()
);
