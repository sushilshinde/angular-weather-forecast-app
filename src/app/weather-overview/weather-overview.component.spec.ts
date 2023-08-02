import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOverviewComponent } from './weather-overview.component';

describe('WeatherOverviewComponent', () => {
  let component: WeatherOverviewComponent;
  let fixture: ComponentFixture<WeatherOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherOverviewComponent]
    });
    fixture = TestBed.createComponent(WeatherOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
