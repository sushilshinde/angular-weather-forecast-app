import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from 'src/app/weather-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailed-view-page',
  templateUrl: './detailed-view-page.component.html',
  styleUrls: ['./detailed-view-page.component.css']
})
export class DetailedViewPageComponent implements OnInit, OnDestroy {

  constructor(private weatherService: WeatherApiService){}
 
  clickedWeather: any;
  clickedWeatherSubscription: Subscription;
  tHourlyData: number[] = [];
  tHSub: Subscription;
  pHourlyData: number[] = [];
  pHSub: Subscription;
  wHourlyData: number[] = [];
  wHSub: Subscription;
  rHourlyData: number[] = [];
  rHSub: Subscription;

  ngOnInit(): void {
    this.clickedWeatherSubscription = this.weatherService.activeWeatherReportChanged.subscribe((str) => {
      this.clickedWeather = str;
    });
    this.clickedWeather = this.weatherService.getActiveWeatherReport()
    this.tHSub = this.weatherService.hourlyTempChange.subscribe((data) => {
      this.tHourlyData = data;
    })
    this.tHourlyData = this.weatherService.getHourlyTemp();
    this.pHSub = this.weatherService.hourlyPreceptionChange.subscribe((data) => {
      this.pHourlyData = data;
    })
    this.pHourlyData = this.weatherService.getHourlyPreception();
    this.rHSub = this.weatherService.hourlyRainChange.subscribe((data) => {
      this.rHourlyData = data;
    })
    this.rHourlyData = this.weatherService.getHourlyRain();
    this.wHSub = this.weatherService.hourlyWindChange.subscribe((data) => {
      this.wHourlyData = data;
    })
    this.wHourlyData = this.weatherService.getHourlyWind();
  }

  ngOnDestroy(): void {
    this.clickedWeatherSubscription.unsubscribe()
    this.wHSub.unsubscribe()
    this.rHSub.unsubscribe()
    this.tHSub.unsubscribe()
    this.pHSub.unsubscribe()
  }

}
