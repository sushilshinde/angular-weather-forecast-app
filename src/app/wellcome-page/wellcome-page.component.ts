import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { Subscription } from 'rxjs';
import { Weather } from '../weather.modal';

@Component({
  selector: 'app-wellcome-page',
  templateUrl: './wellcome-page.component.html',
  styleUrls: ['./wellcome-page.component.css'],
})
export class WellcomePageComponent implements OnInit, OnDestroy {
  weather: Weather;
  loader: Boolean = true;
  constructor(private weatherServive: WeatherApiService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(() => {
      this.weather = this.weatherServive.fetchWeather('India');
      this.loader = false;
    }, 2000);
  }

  ngOnDestroy(): void {}
}
