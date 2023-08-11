import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastPageComponent } from './weather-forecast-page.component';

describe('WeatherForecastPageComponent', () => {
  let component: WeatherForecastPageComponent;
  let fixture: ComponentFixture<WeatherForecastPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecastPageComponent]
    });
    fixture = TestBed.createComponent(WeatherForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
