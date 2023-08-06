import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalChartForecastComponent } from './interval-chart-forecast.component';

describe('IntervalChartForecastComponent', () => {
  let component: IntervalChartForecastComponent;
  let fixture: ComponentFixture<IntervalChartForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalChartForecastComponent]
    });
    fixture = TestBed.createComponent(IntervalChartForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
