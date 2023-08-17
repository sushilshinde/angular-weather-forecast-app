import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserData } from 'src/app/model/user.model';
import { login } from '../auth-store/auth.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private store: Store<{ auth: UserData }>, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    this.store.dispatch(
      login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
    );

    this.store.select('auth').subscribe((user: UserData) => {
      if(user.isLoggedIn) {
        this.errorMessage = ""
        this.router.navigate(['/weather-forecast'])
      } else {
        this.errorMessage = "Email or password doesn't match"
      }
    })
  }
}
