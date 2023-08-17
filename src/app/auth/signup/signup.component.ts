import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserData } from 'src/app/model/user.model';
import { signup } from '../auth-store/auth.actions';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string = '';

  constructor(private store: Store<{ auth: UserData }>, private router: Router) {}
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignup() {
    this.store.dispatch(
      signup({
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      })
    );

    this.store.select('auth').subscribe((user: UserData) => {
      if(user.isLoggedIn) {
        this.errorMessage = ""
        this.router.navigate(['/weather-forecast'])
      } else {
        this.errorMessage = "User Already exists"
      }
    })
  }
}
