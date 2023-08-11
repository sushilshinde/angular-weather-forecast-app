import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherApiService } from 'src/app/weather-api.service';

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

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.weatherService.setWeather(this.cityForm.value.city);
  }
}
