import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wellcome-page',
  templateUrl: './wellcome-page.component.html',
  styleUrls: ['./wellcome-page.component.css'],
})
export class WellcomePageComponent implements OnInit, OnDestroy {
  weather: any;
  loader: Boolean = false;
  subscription: Subscription;
  constructor(private weatherService: WeatherApiService) {
    this.weatherService.setWeather('bangalore');

  }

  ngOnInit() {
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
