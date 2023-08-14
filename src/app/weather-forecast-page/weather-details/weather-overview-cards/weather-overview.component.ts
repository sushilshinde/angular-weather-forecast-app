import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherApiService } from 'src/app/weather-api.service';

@Component({
  selector: 'weather-overview-cards',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.css']
})
export class WeatherOverviewComponent implements OnInit, OnDestroy {
  weather: any;
  subscription: Subscription;
  clickedWeather: any;
  clickedWeatherSubscription: Subscription;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    // subscribing to the weather changed and active weather report card
    this.subscription = this.weatherService.weatherChanged.subscribe(
      (weather: any) => {
        this.weather = weather;
      }
    );
    this.weather = this.weatherService.getWeather();
    
    this.clickedWeatherSubscription = this.weatherService.activeWeatherReportChanged.subscribe(
      (clickedWeather: any) => {
        this.clickedWeather = clickedWeather;
      }
    );
    this.clickedWeather = this.weatherService.getActiveWeatherReport();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.clickedWeatherSubscription.unsubscribe();
  }

  onClickDetailedReport(clickedItem: String) {
    this.weatherService.setActiveWeatherReport(clickedItem);
  }
}
