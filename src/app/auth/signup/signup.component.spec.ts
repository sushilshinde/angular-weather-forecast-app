import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupComponent } from './signup.component';
import { AuthReducer } from '../auth-store/auth.reducer';
import { signup } from '../auth-store/auth.actions';
import { UserData } from 'src/app/model/user.model';
import { Router } from '@angular/router';

fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let store: Store<{ auth: UserData }>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({ auth: AuthReducer }),
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form with empty email and password fields', () => {
    expect(component.signUpForm.get('email').value).toBe('');
    expect(component.signUpForm.get('password').value).toBe('');
  });

  it('should require email field', () => {
    const emailControl = component.signUpForm.get('email');
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.hasError('required')).toBeTruthy();
  });

  it('should require valid email format', () => {
    const emailControl = component.signUpForm.get('email');
    emailControl.setValue('invalid_email');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.hasError('email')).toBeTruthy();
  });

  it('should require password field', () => {
    const passwordControl = component.signUpForm.get('password');
    passwordControl.setValue('');
    expect(passwordControl.valid).toBeFalsy();
    expect(passwordControl.hasError('required')).toBeTruthy();
  });

  it('should enable the submit button when form is valid', () => {
    const emailControl = component.signUpForm.get('email');
    emailControl.setValue('test@example.com');
    const passwordControl = component.signUpForm.get('password');
    passwordControl.setValue('password123');
    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    expect(submitButton.disabled).toBeFalsy();
  });

  it('should display error message when user already exists', () => {
    spyOn(store, 'dispatch');
    component.signUpForm.setValue({
      email: 'test@gmail.com',
      password: '12345',
    });
    component.onSignup();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(
      signup({
        email: 'test@gmail.com',
        password: '12345',
      })
    );
    expect(component.errorMessage).toBe('User Already exists');
  });

  
});
