import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Contact } from '../contact.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PhoneBookActions from '../store/phone-book.actions';
import * as phoneBookReducers from '../store/phone-book.reducers';

@Injectable()
export class PhoneBookEffects {

  @Effect()
  contactsFetch = this.action$
    .pipe(ofType(PhoneBookActions.GET_CONTACTS))
    .pipe(switchMap((action: PhoneBookActions.GetContacts) => {
        return this.http.get<Contact[]>('https://ng-test-3fbe9.firebaseio.com/users.json', {
          observe: 'body',
          responseType: 'json',
        }).pipe(map(
          (contacts) => {
            return {
              type: PhoneBookActions.SET_CONTACTS,
              payload: contacts
            };
          }
        ));
      }));

  @Effect({dispatch: false})
  contactStore = this.action$
    .pipe(ofType(PhoneBookActions.STORE_CONTACT))
    .pipe(withLatestFrom(this.store.select('contacts', 'newContact')))
    .pipe(switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', `https://ng-test-3fbe9.firebaseio.com/users/${state.id}.json`,
        state, { reportProgress: true});
      return this.http.request(req);
    }));

  @Effect({dispatch: false})
  contactDelete = this.action$
    .pipe(ofType(PhoneBookActions.DELETE_FROM_SERVER))
    .pipe(withLatestFrom(this.store.select('contacts', 'contacts')))
    .pipe(switchMap(([action, state]) => {
      const request = new HttpRequest('PUT', `https://ng-test-3fbe9.firebaseio.com/users.json`, state, { reportProgress: true});
      return this.http.request(request);
    }));

  constructor(private action$: Actions,
              private http: HttpClient,
              private store: Store<phoneBookReducers.State>) {
  }
}
