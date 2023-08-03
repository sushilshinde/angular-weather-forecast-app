import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedViewPageComponent } from './detailed-view-page.component';

describe('DetailedViewPageComponent', () => {
  let component: DetailedViewPageComponent;
  let fixture: ComponentFixture<DetailedViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedViewPageComponent]
    });
    fixture = TestBed.createComponent(DetailedViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
