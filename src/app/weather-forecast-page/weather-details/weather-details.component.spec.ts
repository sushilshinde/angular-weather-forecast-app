import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsComponent } from './weather-details.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SearchComponent } from './search/search.component';
import { initialState } from 'src/app/weather-store/weather.state';
import { WeatherOverviewComponent } from './weather-overview-cards/weather-overview.component';
import { LineChartComponent } from './line-chart/line-chart.component';

fdescribe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherDetailsComponent,
        SearchComponent,
        WeatherOverviewComponent,
        LineChartComponent,
      ],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
