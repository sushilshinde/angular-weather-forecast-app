import { WeatherData } from '../model/weather.model';

export const initialState: WeatherData = {
  city: '',
  state: '',
  country: '',
  weatherStatus: '',
  temperature: 0,
  humidity: 0,
  wind: 0,
  precipitation: 0,
  rainChance: 0,
  rainChanceHourly: [{ '6h': 0 }, { '12h': 0 }, { '18h': 0 }, { '24h': 0 }],
  windSpeedHourly: [{ '6h': 0 }, { '12h': 0 }, { '18h': 0 }, { '24h': 0 }],
  temperatureHourly: [{ '6h': 0 }, { '12h': 0 }, { '18h': 0 }, { '24h': 0 }],
  precipitationHourly: [{ '6h': 0 }, { '12h': 0 }, { '18h': 0 }, { '24h': 0 }],
  temperatureWeekly: [
    { Mon: 0 },
    { Tue: 0 },
    { Wed: 0 },
    { Thu: 0 },
    { Fri: 0 },
    { Sat: 0 },
    { Sun: 0 },
  ],
};
