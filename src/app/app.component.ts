import { Component, OnInit } from '@angular/core';
import * as fb from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'test-app';

  constructor() {}

  ngOnInit(): void {
    fb.initializeApp({
      apiKey: 'AIzaSyA3MsyFlbrvCXWywq3YPlIXrUX-X-n1aJI',
      authDomain: 'ng-test-3fbe9.firebaseapp.com'
    });
  }
}
