import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import { WeatherForecastPageComponent } from './weather-forecast-page/weather-forecast-page.component';

// routes and the components to render when navigated to the routes
const routes: Routes = [
    {path: '', component: WellcomePageComponent},
    {path: 'weather-forecast', component: WeatherForecastPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }