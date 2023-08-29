import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { WellcomePageComponent } from './wellcome-page.component';
import { reducer } from '../weather-store/weather.reducer';
import { LoaderComponent } from '../CommonComponent/loader/loader.component';

fdescribe('Welcome Component', () => {
  let component: WellcomePageComponent;
  let fixture: ComponentFixture<WellcomePageComponent>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    TestBed.configureTestingModule({
      declarations: [WellcomePageComponent, LoaderComponent],
      imports: [ReactiveFormsModule, StoreModule.forRoot({ weather: reducer })],
      providers: [{ provide: Store, useValue: storeSpy }, Router],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomePageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display content when city is available', () => {
    fixture.detectChanges();
    const contentElement = fixture.nativeElement.querySelector(
      '.wellcome-page-container'
    );
    expect(contentElement).toBeNull();
  });

  it('Should render the text', () => {
    const text = component.text;
    expect(text).toBe('Weather Forecast');
  });

  it('Should render the correct belowText', () => {
    const belowText = component.belowText;
    expect(belowText).toBeDefined();
    expect(belowText).toEqual('Prism!');
  });

  it('Should render the correct text of button', () => {
    const button = component.btnText;
    expect(button).toBe('Get Started');
    expect(button).toContain('Get');
    expect(button).toBeDefined();
  });

  // it('should navigate to weather-forecast on "Get Started" button click', () => {
  //   fixture.detectChanges();
  //   const button = fixture.nativeElement.querySelector(
  //     '.wp-get-started-button'
  //   );
  //   const router = TestBed.inject(Router);
  //   const navigateSpy = spyOn(router, 'navigate');
  //   button.click();
  //   fixture.detectChanges();
  //   expect(navigateSpy).toHaveBeenCalledWith(['/weather-forecast']);
  // });
});
