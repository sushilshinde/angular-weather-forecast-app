import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthReducer } from '../auth-store/auth.reducer';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/user.model';
import { login } from '../auth-store/auth.actions';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';

fdescribe('Login Component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: jasmine.SpyObj<Store>; //  create a mock store using jasmine

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({ auth: AuthReducer }),
      ],
      providers: [{ provide: Store, useValue: storeSpy }, Router],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an error message when login fails', () => {
    const mockUser: UserData = {
      email: 'test@gmail.com',
      password: 'wrongpassword',
      isLoggedIn: false,
    };
    store.select.and.returnValue(of({ auth: mockUser })); // Use of() to create an Observable
    component.loginForm.setValue({
      email: 'test@gmail.com',
      password: 'wrongpassword',
    });
    component.onLogin();
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(By.css('.login--error'))
      .nativeElement.textContent;
    expect(errorMessage).toContain("Email or password doesn't match");
    expect(store.dispatch).toHaveBeenCalledWith(
      login({ email: 'test@gmail.com', password: 'wrongpassword' })
    );
  });

  it('should navigate to weather-forecast on successful login', () => {
    store.select.and.returnValue(of({ isLoggedIn: true }));
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.loginForm.setValue({
      email: 'test@gmail.com',
      password: '12345',
    });
    component.onLogin();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/weather-forecast']);
  });
});
