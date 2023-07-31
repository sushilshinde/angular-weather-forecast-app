import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Weather } from './weather.modal';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor() {}

  private weather: Weather;

  fetchWeather(loacation: String): Weather { 
    this.weather = new Weather(loacation, 'Sunny', 30, 10, 10, 10);
    console.log(this.weather);
    return this.weather;
  }
}
