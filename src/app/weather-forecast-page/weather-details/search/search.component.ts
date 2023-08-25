import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherApiService } from 'src/app/weather-services/weather-api.service';
import { setWeather } from 'src/app/weather-store/weather.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  month: any = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  todayDate: any = new Date();
  currentMonth?: any = this.month[this.todayDate.getMonth()];

  currentYear?: any = this.todayDate.getFullYear();
  currentDateAndYear?: any = this.todayDate.toDateString();

  @Input() city: string;

  constructor(
    private store: Store,
    private weatherService: WeatherApiService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    try {
      if (this.city) {
        this.store.dispatch(
          setWeather({
            location: this.city,
          })
        );
        console.log(this.city);
        this.weatherService.setActiveWeatherReport('rain');
        this.city = '';
      }
    } catch (error) {
      console.log('City Not Found', error);
    }
  }
}
