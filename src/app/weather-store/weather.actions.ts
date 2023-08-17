import { createAction, props } from "@ngrx/store";

export const initWeather = createAction('[Weather] InitWeather');

export const setWeather = createAction('[Weather] SetWeather', props<{ location?: string }>());