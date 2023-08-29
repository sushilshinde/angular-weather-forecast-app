import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalChartForecastComponent } from './interval-chart-forecast.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/weather-store/weather.state';

fdescribe('IntervalChartForecastComponent', () => {
  let component: IntervalChartForecastComponent;
  let fixture: ComponentFixture<IntervalChartForecastComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(IntervalChartForecastComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });
  it('should render the Interval chart component', () => {
    expect(component).toBeTruthy();
  });

  it('Should render the hourly text in UI or not', () => {
    expect(component.text).toContain('Hourly');
  });
});
