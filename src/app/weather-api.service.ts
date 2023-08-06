import { Injectable } from '@angular/core';
import weatherJson from './data/data.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  weatherChanged = new Subject<number[]>();
  hourlyPreceptionChange = new Subject<number[]>();
  hourlyTempChange = new Subject<number[]>();
  hourlyRainChange = new Subject<number[]>();
  hourlyWindChange = new Subject<number[]>();
  weeklytempChange = new Subject<number[]>();
  activeWeatherReportChanged = new Subject<String>();
  private weather: any;
  private hourlyPreception: number[];
  private hourlyTemp: number[];
  private hourlyRain: number[];
  private hourlyWind: number[];
  private weeklytemp: number[];
  private activeWeatherReport: String = 'rain';

  constructor() {}

  setWeather(loacation: String) {
    const weatherjsn = weatherJson;
    const stateWeather = weatherjsn.filter(
      (state) => state.city.toLowerCase() === loacation.toLowerCase()
    );
    this.weather = stateWeather[0];
    this.weatherChanged.next(this.weather);

    let data = this.weather?.precipitationHourly;
    this.hourlyPreception = this.formatData(data);
    this.hourlyPreceptionChange.next(this.hourlyPreception);

    data = this.weather?.rainChanceHourly;
    this.hourlyRain = this.formatData(data);
    this.hourlyRainChange.next(this.hourlyRain);

    data = this.weather?.temperatureHourly;
    this.hourlyTemp = this.formatData(data);
    this.hourlyTempChange.next(this.hourlyTemp);

    data = this.weather?.windSpeedHourly;
    this.hourlyWind = this.formatData(data);
    this.hourlyWindChange.next(this.hourlyWind);

    data = this.weather?.temperatureWeekly;
    this.weeklytemp = this.formatData(data);
    this.weeklytempChange.next(this.weeklytemp);

    this.setActiveWeatherReport('rain');    
  }

  setActiveWeatherReport(str: String) {
    this.activeWeatherReport = str;
    this.activeWeatherReportChanged.next(this.activeWeatherReport);
    console.log(this.activeWeatherReport);
  }

  getWeather() {
    return this.weather;
  }
  getHourlyTemp(): number[] {
    return this.hourlyTemp;
  }
  getWeeklyTemp() {
    return this.weeklytemp;
  }
  getHourlyPreception() {
    return this.hourlyPreception;
  }
  getHourlyWind() {
    return this.hourlyWind;
  }
  getHourlyRain() {
    return this.hourlyRain;
  }
  getActiveWeatherReport() {
    return this.activeWeatherReport;
  }

  formatData(data: any): number[] {
    const arr = [];
    data.forEach((hour) => {
      for (const key in hour) {
        arr.push(hour[key]);
      }
    });
    return [...arr];
  }
}
