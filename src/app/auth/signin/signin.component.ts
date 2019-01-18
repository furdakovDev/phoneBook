import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onSignin() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
    const userName = JSON.parse(localStorage.getItem(email)).name;
    this.store.dispatch(new AuthActions.SetUserName(userName));
    this.signupForm.resetForm();
  }

  onClear() {
    this.signupForm.resetForm();
  }
}
