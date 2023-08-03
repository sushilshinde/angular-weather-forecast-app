import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalDetailHeaderComponent } from './regional-detail-header.component';

describe('RegionalDetailHeaderComponent', () => {
  let component: RegionalDetailHeaderComponent;
  let fixture: ComponentFixture<RegionalDetailHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionalDetailHeaderComponent]
    });
    fixture = TestBed.createComponent(RegionalDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
