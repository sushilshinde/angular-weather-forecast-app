import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserData } from '../model/user.model';
import { Router } from '@angular/router';
import { logout } from '../auth/auth-store/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{
  user$: Observable<UserData>;
  collapsed = true;

  constructor(private store: Store<{ auth: UserData }>, private router: Router){}

  ngOnInit(): void {
      this.user$ = this.store.select('auth');
      
  }

  onLogout(){
    this.store.dispatch(logout());
    this.router.navigate(['/'])
  }
}
