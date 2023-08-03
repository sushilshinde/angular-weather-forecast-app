import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunRiseSetComponentComponent } from './sun-rise-set-component.component';

describe('SunRiseSetComponentComponent', () => {
  let component: SunRiseSetComponentComponent;
  let fixture: ComponentFixture<SunRiseSetComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunRiseSetComponentComponent]
    });
    fixture = TestBed.createComponent(SunRiseSetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
