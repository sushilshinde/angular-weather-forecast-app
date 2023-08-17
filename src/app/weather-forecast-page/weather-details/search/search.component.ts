import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { WeatherApiService } from 'src/app/weather-services/weather-api.service';
import { setWeather } from 'src/app/weather-store/weather.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('cityForm', { static: false }) cityForm: NgForm;
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

  constructor(
    private store: Store,
    private weatherService: WeatherApiService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // calling setting weather of a city recieved in argument
    this.store.dispatch(setWeather({ location: this.cityForm.value.city }));
    this.weatherService.setActiveWeatherReport('rain');
  }
}
