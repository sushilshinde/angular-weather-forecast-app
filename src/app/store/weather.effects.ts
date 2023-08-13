import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { WeatherApiService } from '../weather-api.service';
import {
  SET_ACTIVE_WEATHER_REPORT,
  WEATHER_DATA_REQUEST,
} from './weather.actions';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherApiService: WeatherApiService
  ) {}
  setWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WEATHER_DATA_REQUEST),
      mergeMap(({ weather }) => {
        return this.weatherApiService.setData(weather).pipe(
          map(() => {
            return SET_ACTIVE_WEATHER_REPORT({
              activeReport: weather.weatherStatus,
            });
          })
        );
      })
    )
  );
}
