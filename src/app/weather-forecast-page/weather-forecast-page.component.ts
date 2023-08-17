import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherData } from '../model/weather.model';

@Component({
  selector: 'app-weather-forecast-page',
  templateUrl: './weather-forecast-page.component.html',
  styleUrls: ['./weather-forecast-page.component.css'],
})
export class WeatherForecastPageComponent implements OnInit {
  weather$: Observable<WeatherData>

  constructor(private store: Store<{weather: WeatherData}>) {}

  ngOnInit(): void {
      this.weather$ = this.store.select('weather');
  }
}
