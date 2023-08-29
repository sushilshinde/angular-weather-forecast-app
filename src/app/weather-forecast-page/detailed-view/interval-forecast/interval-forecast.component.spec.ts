import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalForecastComponent } from './interval-forecast.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/weather-store/weather.state';

fdescribe('IntervalForecastComponent', () => {
  let component: IntervalForecastComponent;
  let fixture: ComponentFixture<IntervalForecastComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(IntervalForecastComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a correct text of paragraph', () => {
    expect(component.text).toContain('Chances of Rain');
  });
});
