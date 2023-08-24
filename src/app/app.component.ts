import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initWeather } from './weather-store/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(initWeather());
  }
}
