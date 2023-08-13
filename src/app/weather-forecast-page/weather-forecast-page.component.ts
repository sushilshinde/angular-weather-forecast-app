import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherApiService } from '../weather-api.service';
import { Store } from '@ngrx/store';
import { WeatherState } from '../store/weather.reducer';
import { WEATHER_DATA_REQUEST } from '../store/weather.actions';

@Component({
  selector: 'app-weather-forecast-page',
  templateUrl: './weather-forecast-page.component.html',
  styleUrls: ['./weather-forecast-page.component.css'],
})
export class WeatherForecastPageComponent implements OnInit, OnDestroy {
  weather: any;
  subscription: Subscription;
  loader: boolean = false;

  constructor(
    private store: Store<{ weather: WeatherState }>,
    private weatherService: WeatherApiService
  ) {}

  ngOnInit(): void {
    this.subscription = this.weatherService.weatherChanged.subscribe(
      (weather: any) => {
        this.weather = weather;
      }
    );
    if (!this.weather) {
      this.weatherService.setWeather();
    }

    this.weather = this.weatherService.getWeather();
    this.store.dispatch(WEATHER_DATA_REQUEST({ weather: this.weather }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
