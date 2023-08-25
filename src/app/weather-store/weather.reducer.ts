import { createReducer, on } from '@ngrx/store';
import { initialState } from './weather.state';
import { initWeather, setWeather, successWeather } from './weather.actions';

const weatherReducer = createReducer(
  initialState,
  on(setWeather, (state, { location }) => {
    const city = location;
    return { ...state, city };
  }),
  on(initWeather, (state) => state),
  on(successWeather, (state, { weatherData }) => {
    return { ...weatherData };
  })
);

export function reducer(state, action) {
  return weatherReducer(state, action);
}
