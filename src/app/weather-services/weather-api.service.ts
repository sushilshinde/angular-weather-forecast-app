import { Injectable } from '@angular/core';
import weatherJson from '../data/data.json';
import citiesJson from '../data/cities.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  activeWeatherReportChanged = new Subject<string>();

  private activeWeatherReport: string = 'rain';

  setActiveWeatherReport(str: string) {
    this.activeWeatherReport = str;
    this.activeWeatherReportChanged.next(this.activeWeatherReport);
  }
  getActiveWeatherReport() {
    return this.activeWeatherReport;
  }
}
