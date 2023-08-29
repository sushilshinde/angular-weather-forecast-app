import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalDetailHeaderComponent } from './regional-detail-header.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/weather-store/weather.state';
import { IsoToAmPmPipe } from 'src/app/CommonComponent/pipes/iso-to-am-pm.pipe';
import { AppenderPipe } from 'src/app/CommonComponent/pipes/appender.pipe';

fdescribe('RegionalDetailHeaderComponent', () => {
  let component: RegionalDetailHeaderComponent;
  let fixture: ComponentFixture<RegionalDetailHeaderComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegionalDetailHeaderComponent,
        IsoToAmPmPipe,
        AppenderPipe,
      ],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(RegionalDetailHeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should render regional detail header component', () => {
    expect(component).toBeDefined();
  });
});
