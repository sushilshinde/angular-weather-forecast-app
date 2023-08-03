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
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './weather-forecast-page/weather-details/line-chart/line-chart.component';
import { WeatherDetailsComponent } from './weather-forecast-page/weather-details/weather-details/weather-details.component';
import { SunRiseSetComponentComponent } from './weather-forecast-page/detailed-view/sun-rise-set-component/sun-rise-set-component.component';
import { SearchComponent } from './weather-forecast-page/weather-details/search/search.component';
import { WeatherOverviewComponent } from './weather-forecast-page/weather-details/weather-overview/weather-overview.component';
import { WeatherDetailsCardComponent } from './weather-forecast-page/weather-details/weather-overview/weather-details-card/weather-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WellcomePageComponent,
    WeatherForecastPageComponent,
    NavigationBarComponent,
    LoaderComponent,
    DetailedViewPageComponent,
    LineChartComponent,
    WeatherDetailsComponent,
    SunRiseSetComponentComponent,
    SearchComponent,
    WeatherOverviewComponent,
    WeatherDetailsCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
