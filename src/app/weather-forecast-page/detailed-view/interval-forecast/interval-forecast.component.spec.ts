import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalForecastComponent } from './interval-forecast.component';

describe('IntervalForecastComponent', () => {
  let component: IntervalForecastComponent;
  let fixture: ComponentFixture<IntervalForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalForecastComponent]
    });
    fixture = TestBed.createComponent(IntervalForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
