import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { initWeather, setWeather, successWeather } from './weather.actions';
import { HttpClient } from '@angular/common/http';
import { Region } from '../model/region.modal';
import { WeatherData } from '../model/weather.model';
import { of } from 'rxjs';
import { initialState } from './weather.state';

@Injectable()
export class WeatherEffects {
  private api_key: string = '4b91e35e59554e9fa51d5fa509697fb5';
  private url: string = 'https://ipgeolocation.abstractapi.com/v1/';

  constructor(
    private actions$: Actions,
    private store: Store,
    private http: HttpClient
  ) {}

  fetchLocation() {
    const options = {
      params: {
        api_key: this.api_key,
      },
    };

    return this.http.get<Region>(this.url, options).pipe(
      catchError((error) => {
        console.error('Error fetching the location:', error);
        throw error;
      })
    );
  }

  fetchWeatherData(city: string) {
    const weatherApiUrl = `http://localhost:3000/team-a/weather-details?city=${city}`;

    return this.http.get<WeatherData>(weatherApiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching weather data:', error);
        throw error;
      })
    );
  }

  setWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setWeather),
      switchMap((action) =>{
        
        return this.fetchWeatherData(action.location).pipe(
          map((weatherData) => {
            return successWeather({ weatherData });
          }),
          catchError((error) => {
            console.error('Error fetching weather data:', error);
            const errObj = {...initialState};
            errObj.city = '';
            return of(successWeather({weatherData: errObj}));
          })
        )}
      )
    )
  );

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initWeather),
      exhaustMap(() =>
        this.fetchLocation().pipe(
          map((region) => {
            const { city } = region;
            return setWeather({ location: city });
          }),
          catchError((error) => {
            console.error('Error fetching weather data:', error);
            return of(setWeather({ location: 'City Not Found' }));
          })
        )
      )
    )
  );
}
