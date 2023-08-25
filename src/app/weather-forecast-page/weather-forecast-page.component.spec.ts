import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherForecastPageComponent } from './weather-forecast-page.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../weather-store/weather.state';
import { LoaderComponent } from '../CommonComponent/loader/loader.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { DetailedViewPageComponent } from './detailed-view/detailed-view-page.component';
import { SearchComponent } from './weather-details/search/search.component';

fdescribe('WeatherForecastPageComponent', () => {
  let component: WeatherForecastPageComponent;
  let fixture: ComponentFixture<WeatherForecastPageComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherForecastPageComponent,
        LoaderComponent,
        WeatherDetailsComponent,
        DetailedViewPageComponent,
        SearchComponent,
      ],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(WeatherForecastPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should display loader when weather data is not available', () => {
    const mockWeather = { ...initialState, city: '' };
    store.setState({ weather: mockWeather });
    fixture.detectChanges();
    const loaderElement = fixture.nativeElement.querySelector('.app-loader');
    expect(loaderElement).toBeTruthy();
  });

  it('should display weather data when available', () => {
    const mockWeather = { ...initialState, city: 'Pune' };
    store.setState({ weather: mockWeather });
    fixture.detectChanges();
    const weatherContainer = fixture.nativeElement.querySelector(
      '.weather-forecast-container'
    );
    expect(weatherContainer).toBeTruthy();
  });
});
