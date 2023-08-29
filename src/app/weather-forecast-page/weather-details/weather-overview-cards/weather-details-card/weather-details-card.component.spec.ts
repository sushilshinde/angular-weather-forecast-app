import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsCardComponent } from './weather-details-card.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/weather-store/weather.state';

fdescribe('WeatherDetailsCardComponent', () => {
  let component: WeatherDetailsCardComponent;
  let fixture: ComponentFixture<WeatherDetailsCardComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDetailsCardComponent],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(WeatherDetailsCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should render the weather details component', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });
});
