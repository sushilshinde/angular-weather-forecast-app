import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOverviewComponent } from './weather-overview.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoaderComponent } from 'src/app/CommonComponent/loader/loader.component';
import { initialState } from 'src/app/weather-store/weather.state';
fdescribe('WeatherOverviewComponent', () => {
  let component: WeatherOverviewComponent;
  let fixture: ComponentFixture<WeatherOverviewComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherOverviewComponent, LoaderComponent],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(WeatherOverviewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct text of heading', () => {
    expect(component.text).toContain('Today Overview');
  });
});
