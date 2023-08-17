import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserData } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private loginState: boolean = false;

  constructor(private store: Store<{ auth: UserData }>, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    this.store.select('auth').subscribe((userData: UserData) => {
      this.loginState = userData?.isLoggedIn;
    });

    if (this.loginState) {
      return true;
    } else {
      // Redirect to login page or any other appropriate action
      return this.router.createUrlTree(['/auth/login']);
    }
  }
}
