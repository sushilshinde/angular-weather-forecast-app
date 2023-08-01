import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import { WeatherForecastPageComponent } from './weather-forecast-page/weather-forecast-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './CommonComponent/loader/loader.component';
import { DetailedViewPageComponent } from './weather-forecast-page/detailed-view/detailed-view-page/detailed-view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WellcomePageComponent,
    WeatherForecastPageComponent,
    NavigationBarComponent,
    LoaderComponent,
    DetailedViewPageComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
