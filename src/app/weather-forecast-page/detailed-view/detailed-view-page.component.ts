import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from 'src/app/weather-services/weather-api.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherData } from 'src/app/model/weather.model';

@Component({
  selector: 'detailed-view-page',
  templateUrl: './detailed-view-page.component.html',
  styleUrls: ['./detailed-view-page.component.css'],
})
export class DetailedViewPageComponent implements OnInit, OnDestroy {
  storeSubs: Subscription;
  constructor(
    private weatherService: WeatherApiService,
    private store: Store<{ weather: WeatherData }>
  ) {}

  clickedWeather: any;
  clickedWeatherSubscription: Subscription;
  tHourlyData: number[] = [];
  pHourlyData: number[] = [];
  wHourlyData: number[] = [];
  rHourlyData: number[] = [];

  ngOnInit(): void {
    // subscribing to all the hourly data of the rain, precipitation, wind and temperature
    this.clickedWeatherSubscription =
      this.weatherService.activeWeatherReportChanged.subscribe((str) => {
        this.clickedWeather = str;
      });
    this.clickedWeather = this.weatherService.getActiveWeatherReport();
    this.storeSubs = this.store
      .select('weather')
      .subscribe((weatherData: WeatherData) => {
        this.tHourlyData = this.formatData(weatherData.temperatureHourly);
        this.pHourlyData = this.formatData(weatherData.precipitationHourly);
        this.rHourlyData = this.formatData(weatherData.rainChanceHourly);
        this.wHourlyData = this.formatData(weatherData.windSpeedHourly);
      });
  }

  ngOnDestroy(): void {
    this.clickedWeatherSubscription.unsubscribe();
    this.storeSubs.unsubscribe();
  }

  formatData(data: any): number[] {
    const arr = [];
    if (data) {
      data.forEach((hour) => {
        for (const key in hour) {
          arr.push(hour[key]);
        }
      });
    }
    return [...arr];
  }
}
