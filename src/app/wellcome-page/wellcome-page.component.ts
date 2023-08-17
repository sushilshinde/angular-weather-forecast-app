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
  weather$: Observable<WeatherData>;
  loader: Boolean = false;

  constructor(private store: Store<{ weather: WeatherData }>) {}

  ngOnInit() {
    this.weather$ = this.store.select('weather');
  }
}
