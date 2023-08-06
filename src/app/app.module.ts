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
import { RegionalDetailHeaderComponent } from './weather-forecast-page/detailed-view/regional-detail-header/regional-detail-header.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntervalForecastComponent } from './weather-forecast-page/detailed-view/interval-forecast/interval-forecast.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { ProgressBarComponent } from './weather-forecast-page/detailed-view/interval-forecast/progress-bar/progress-bar.component';
import { IntervalChartForecastComponent } from './weather-forecast-page/detailed-view/interval-chart-forecast/interval-chart-forecast.component';

registerLocaleData(en);

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
    RegionalDetailHeaderComponent,
    IntervalForecastComponent,
    ProgressBarComponent,
    IntervalChartForecastComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule,
    NzProgressModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
