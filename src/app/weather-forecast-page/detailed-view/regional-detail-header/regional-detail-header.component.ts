import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherApiService } from 'src/app/weather-api.service';

@Component({
  selector: 'regional-detail-header',
  templateUrl: './regional-detail-header.component.html',
  styleUrls: ['./regional-detail-header.component.css'],
})
export class RegionalDetailHeaderComponent implements OnInit, OnDestroy {
  currentTime: string;
  weather: any;
  subscription: Subscription;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    this.subscription = this.weatherService.weatherChanged.subscribe(
      (weather: any) => {
        this.weather = weather;
      }
    );
    this.weather = this.weatherService.getWeather();
    const curDate = new Date(Date.now());

    const formatedDate =
      curDate.getMonth() +
      1 +
      ' ' +
      curDate.getUTCDate() +
      ' ' +
      curDate.getFullYear() +
      ' ' +
      curDate.getHours() +
      ':' +
      curDate.getMinutes();

    this.currentTime = new Date(formatedDate + ' UTC').toISOString();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }
}
