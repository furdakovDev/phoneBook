import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromPhoneBook from '../store/phone-book.reducers';
import * as PhoneBookActions from '../store/phone-book.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnDestroy, OnInit {
  subscription: Subscription;
  contact: Observable<fromPhoneBook.State>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromPhoneBook.FeatureState>) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.store.dispatch(new PhoneBookActions.StartEditing(+params.id));
          this.contact = this.store.select('contacts');
        }
      );
  }

  routeOut() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
