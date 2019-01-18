import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const name = this.signupForm.value.name;
    const user = {
      name: name,
      email: email,
      password: password
    };
    localStorage.setItem(email, JSON.stringify(user));
    this.store.dispatch(new AuthActions.TrySignup({username: email, password: password}));
    this.signupForm.resetForm();
  }

  onClear() {
    this.signupForm.resetForm();
  }
}
