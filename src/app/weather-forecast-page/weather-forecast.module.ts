import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastPageComponent } from '../weather-forecast-page/weather-forecast-page.component';
import { NgModule } from '@angular/core';
import { DetailedViewPageComponent } from './detailed-view/detailed-view-page.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { IntervalChartForecastComponent } from './detailed-view/interval-chart-forecast/interval-chart-forecast.component';
import { ProgressBarComponent } from './detailed-view/interval-forecast/progress-bar/progress-bar.component';
import { IntervalForecastComponent } from './detailed-view/interval-forecast/interval-forecast.component';
import { RegionalDetailHeaderComponent } from './detailed-view/regional-detail-header/regional-detail-header.component';
import { WeatherDetailsCardComponent } from './weather-details/weather-overview-cards/weather-details-card/weather-details-card.component';
import { WeatherOverviewComponent } from './weather-details/weather-overview-cards/weather-overview.component';
import { SearchComponent } from './weather-details/search/search.component';
import { SunRiseSetComponentComponent } from './detailed-view/sun-rise-set-component/sun-rise-set-component.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { LineChartComponent } from './weather-details/line-chart/line-chart.component';
import { IsoToAmPmPipe } from '../CommonComponent/pipes/iso-to-am-pm.pipe';
import { HoursAgoInPipe } from '../CommonComponent/pipes/hours-ago-in.pipe';
import { CardHoverDirective } from '../CommonComponent/dirctives/card-hover.directive';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../CommonComponent/shared.module';
import { AuthGuard } from '../auth/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: WeatherForecastPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    WeatherForecastPageComponent,
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
    IsoToAmPmPipe,
    HoursAgoInPipe,
    CardHoverDirective,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    NzProgressModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class WeatherModule {}
