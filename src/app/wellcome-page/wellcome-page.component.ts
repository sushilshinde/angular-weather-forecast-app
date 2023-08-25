import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from '../weather-services/weather-api.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherData } from '../model/weather.model';

@Component({
  selector: 'app-wellcome-page',
  templateUrl: './wellcome-page.component.html',
  styleUrls: ['./wellcome-page.component.css'],
})
export class WellcomePageComponent implements OnInit {
  text: string = 'Weather Forecast';
  belowText: string = 'Prism!';
  description: string =
    ' We are a weather forecasting system. Our experts check the information with the most modern satellite equipment and powerful servers. And they will give you the most accurate results';
  weather$: Observable<WeatherData>;
  loader: Boolean = false;

  constructor(private store: Store<{ weather: WeatherData }>) {}

  ngOnInit() {
    this.weather$ = this.store.select('weather');
  }
}
