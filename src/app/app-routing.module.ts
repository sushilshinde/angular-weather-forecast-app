import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';

// routes and the components to render when navigated to the routes
const routes: Routes = [
  { path: '', component: WellcomePageComponent },
  {
    path: 'weather-forecast',
    loadChildren: () =>
      import('./weather-forecast-page/weather-forecast.module').then(
        (m) => m.WeatherModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
