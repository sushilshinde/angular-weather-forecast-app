// Interface of Weather data format
export interface WeatherData {
  city: string;
  state: string;
  country: string;
  weatherStatus: string;
  temperature: number;
  humidity: number;
  wind: number;
  precipitation: number;
  rainChance: number;
  rainChanceHourly: { [key: string]: number }[];
  windSpeedHourly: { [key: string]: number }[];
  temperatureHourly: { [key: string]: number }[];
  precipitationHourly: { [key: string]: number }[];
  temperatureWeekly: { [key: string]: number }[];
}
