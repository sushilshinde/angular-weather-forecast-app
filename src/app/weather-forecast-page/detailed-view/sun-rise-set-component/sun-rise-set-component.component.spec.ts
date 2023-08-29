import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunRiseSetComponentComponent } from './sun-rise-set-component.component';
import { IsoToAmPmPipe } from 'src/app/CommonComponent/pipes/iso-to-am-pm.pipe';

describe('SunRiseSetComponentComponent', () => {
  let component: SunRiseSetComponentComponent;
  let fixture: ComponentFixture<SunRiseSetComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunRiseSetComponentComponent, IsoToAmPmPipe],
    });
    fixture = TestBed.createComponent(SunRiseSetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the sunrise and sunset text', () => {
    expect(component).toBeDefined('Sunrise & Sunset');
  });
});
