import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { WeatherData } from 'src/app/model/weather.model';
import { WeatherApiService } from 'src/app/weather-services/weather-api.service';

@Component({
  selector: 'weather-overview-cards',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.css'],
})
export class WeatherOverviewComponent implements OnInit, OnDestroy {
  weather$: Observable<WeatherData>;
  clickedWeather: any;
  clickedWeatherSubscription: Subscription;

  constructor(
    private weatherService: WeatherApiService,
    private store: Store<{ weather: WeatherData }>
  ) {}

  ngOnInit(): void {
    // subscribing to the weather changed and active weather report card
    this.weather$ = this.store.select('weather');

    this.clickedWeatherSubscription =
      this.weatherService.activeWeatherReportChanged.subscribe(
        (clickedWeather: any) => {
          this.clickedWeather = clickedWeather;
        }
      );
    this.clickedWeather = this.weatherService.getActiveWeatherReport();
  }

  ngOnDestroy(): void {
    this.clickedWeatherSubscription.unsubscribe();
  }

  onClickDetailedReport(clickedItem: string) {
    this.weatherService.setActiveWeatherReport(clickedItem);
  }
}
