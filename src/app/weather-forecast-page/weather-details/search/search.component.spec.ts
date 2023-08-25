import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { Store } from '@ngrx/store';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule], // Ensure FormsModule is imported
      providers: [{ provide: Store, useValue: mockStore }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action on form submission', () => {
    const city = 'Pune';
    component.city = city;
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should display current month and year', () => {
    const todayDate = new Date();
    const currentMonth = component.month[todayDate.getMonth()];
    const currentYear = todayDate.getFullYear();
    const currentMonthElement =
      fixture.nativeElement.querySelector('.month-and-year');
    expect(currentMonthElement.textContent).toContain(
      `${currentMonth} ${currentYear}`
    );
  });

  it('should display current date and year', () => {
    const todayDate = new Date();
    const currentDateAndYear = todayDate.toDateString();
    const fullDateElement = fixture.nativeElement.querySelector('.full-date');
    expect(fullDateElement.textContent).toContain(currentDateAndYear);
  });

  it('should update the input field with empty text', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = '';
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.city).toBeUndefined();
  });
});
