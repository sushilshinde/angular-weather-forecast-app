import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-forecast-page',
  templateUrl: './weather-forecast-page.component.html',
  styleUrls: ['./weather-forecast-page.component.css'],
})
export class WeatherForecastPageComponent implements OnInit, OnDestroy {
  weather: any;
  subscription: Subscription;

  constructor(private weatherService: WeatherApiService) {
    this.weatherService.setWeather('Bangalore');
  }

  ngOnInit(): void {
    this.subscription = this.weatherService.weatherChanged.subscribe(
      (weather: any) => {
        this.weather = weather;
      }
    );
    this.weather = this.weatherService.getWeather();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
