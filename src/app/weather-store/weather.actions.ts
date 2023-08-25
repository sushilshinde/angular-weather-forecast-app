import { createAction, props } from "@ngrx/store";
import { WeatherData } from "../model/weather.model";

export const initWeather = createAction('[Weather] InitWeather');

export const setWeather = createAction('[Weather] SetWeather', props<{ location?: string }>());

export const successWeather = createAction('[Weather] SuccessWeather', props<{ weatherData: WeatherData }>());
