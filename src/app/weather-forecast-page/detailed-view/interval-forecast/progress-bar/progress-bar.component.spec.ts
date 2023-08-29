import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { AppenderPipe } from 'src/app/CommonComponent/pipes/appender.pipe';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/weather-store/weather.state';
import { NzProgressComponent } from 'ng-zorro-antd/progress';

fdescribe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarComponent, AppenderPipe, NzProgressComponent],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should render the progress bar component', () => {
    expect(component).toBeTruthy();
  });
});
