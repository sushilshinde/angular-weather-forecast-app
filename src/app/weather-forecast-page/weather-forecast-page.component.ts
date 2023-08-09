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
  loader: boolean = false;

  constructor(private weatherService: WeatherApiService) {
    if (!this.weather?.city) {
      this.weatherService.setWeather();
    }
  }

  ngOnInit(): void {
    // this.loader = true;
    this.subscription = this.weatherService.weatherChanged.subscribe(
      (weather: any) => {
        this.weather = weather;
        // this.loader = false;
      }
    );
    this.weather = this.weatherService.getWeather();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
