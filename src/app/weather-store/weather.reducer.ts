import { createReducer, on } from '@ngrx/store';
import { initialState } from './weather.state';
import { initWeather, setWeather } from './weather.actions';
import weatherJson from '../data/data.json';
import citiesJson from '../data/cities.json';
import { WeatherData } from '../model/weather.model';

const weatherReducer = createReducer(
  initialState,
  on(setWeather, (state, { location }) => {
    const stateWeather = findWeatherForLocation(location);
    return { ...state, ...stateWeather };
  }),
  on(initWeather, (state) => state)
);

function findWeatherForLocation(location: string): WeatherData | undefined {
  const matchedCityState = findCityStateForLocation(location);
  if (matchedCityState) {
    const [city, state] = matchedCityState;
    const weatherForLocation = {
      ...weatherJson[0],
      city,
      state,
      country: 'India',
    };
    return weatherForLocation;
  }
  return undefined;
}

function findCityStateForLocation(location: string): [string, string] | undefined {
  for (const state in citiesJson) {
    const cities = citiesJson[state];
    if (cities.includes(location)) {
      return [location, state];
    }
  }
  return undefined;
}

export function reducer(state, action) {
  return weatherReducer(state, action);
}
