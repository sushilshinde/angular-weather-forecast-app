import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponent } from './line-chart.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/weather-store/weather.state';

fdescribe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartComponent],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
