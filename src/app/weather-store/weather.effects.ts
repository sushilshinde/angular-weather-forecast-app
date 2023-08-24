import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { initWeather, setWeather } from './weather.actions';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Region } from '../model/region.modal';

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

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initWeather),
      exhaustMap(() =>
        this.fetchLocation().pipe(
          map((region) => {
            const { city } = region;
            console.log(region);
            console.log(setWeather({ location: city }));
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
