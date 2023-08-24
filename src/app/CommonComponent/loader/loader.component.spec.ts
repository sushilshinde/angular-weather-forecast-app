import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

fdescribe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent]
    });
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the loader container', () => {
    const loaderContainer = fixture.nativeElement.querySelector('.loader-container');
    expect(loaderContainer).toBeTruthy();
  });

  it('should render the loader elements', () => {
    const loaderElements = fixture.nativeElement.querySelectorAll('.lds-ring div');
    expect(loaderElements.length).toBe(4);
  });
});
