import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth-guard.guard';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(AuthGuard); // Inject the AuthGuard instance
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is logged in', () => {
    spyOnProperty(guard['authService'], 'isLoggedIn', 'get').and.returnValue(
      true
    );

    const canActivate = guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(canActivate).toBe(true);
  });

  it('should return false and navigate to login page if user is not logged in', () => {
    spyOnProperty(guard['authService'], 'isLoggedIn', 'get').and.returnValue(
      false
    );

    const router = TestBed.inject(Router);  // Inject the Router
    const navigateSpy = spyOn(router, 'navigate');  // here we are using spyOn method to navigate 

    const canActivate = guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(canActivate).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/auth/login']);
  });
});
