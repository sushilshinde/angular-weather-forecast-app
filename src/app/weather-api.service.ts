import { Injectable } from '@angular/core';
import weatherJson from './data/data.json';
import citiesJson from './data/cities.json';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Region } from './model/region.modal';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private api_key: String = '4b91e35e59554e9fa51d5fa509697fb5';
  private url: any =
    'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;

  region: Region;

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

  constructor(private http: HttpClient) {}

  fetchLocation() {
    return this.http.get<any>(this.url);
  }

  setData(weather): Observable<void> {
    this.weatherChanged.next(weather);

    let data = weather?.precipitationHourly;
    this.hourlyPreception = this.formatData(data);
    this.hourlyPreceptionChange.next(this.hourlyPreception);

    data = weather?.rainChanceHourly;
    this.hourlyRain = this.formatData(data);
    this.hourlyRainChange.next(this.hourlyRain);

    data = weather?.temperatureHourly;
    this.hourlyTemp = this.formatData(data);
    this.hourlyTempChange.next(this.hourlyTemp);

    data = weather?.windSpeedHourly;
    this.hourlyWind = this.formatData(data);
    this.hourlyWindChange.next(this.hourlyWind);

    data = weather?.temperatureWeekly;
    this.weeklytemp = this.formatData(data);
    this.weeklytempChange.next(this.weeklytemp);

    this.setActiveWeatherReport('rain');

    return new Observable<void>();
  }

  async setWeather(loacation?: String) {
    const weatherjsn = weatherJson;
    if (loacation?.length > 0) {
      const statesList: any = citiesJson;
      for (const state in statesList) {
        const cities = statesList[state];
        cities.forEach((city) => {
          if (city === loacation) {
            const stateWeather = {
              ...weatherjsn[0],
              city,
              state,
              country: 'India',
            };
            this.weather = { ...stateWeather };
          }
        });
      }
      this.setData(this.weather);
    } else {
      await this.fetchLocation().subscribe((res) => {
        this.region = new Region(res.city, res.region, res.country);
        const stateWeather = {
          ...weatherjsn[0],
          city: this.region.city,
          state: this.region.region,
          country: this.region.country,
        };
        this.weather = { ...stateWeather };
        this.setData(this.weather);
      });
    }
  }

  setActiveWeatherReport(str: String) {
    this.activeWeatherReport = str;
    this.activeWeatherReportChanged.next(this.activeWeatherReport);
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
    if (data) {
      data.forEach((hour) => {
        for (const key in hour) {
          arr.push(hour[key]);
        }
      });
    }
    return [...arr];
  }
}
