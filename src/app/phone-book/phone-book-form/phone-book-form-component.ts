import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Contact } from '../contact.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as fromPhoneBook from '../store/phone-book.reducers';
import * as PhoneBookActions from '../store/phone-book.actions';

@Component({
  selector: 'app-phone-book-form',
  templateUrl: './phone-book-form-component.html',
  styleUrls: ['./phone-book-form-component.scss']
})

export class PhoneBookFormComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  contactId: string;
  contact: Contact;

  signupForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private store: Store<fromPhoneBook.FeatureState>) {

    this.signupForm = fb.group({
      'firstName': new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      'lastName': new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      'phone': new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern('^(\\+[1-9][0-9]*(\\([0-9]*\\)|-[0-9]*-))?[0]?[1-9][0-9\\- ]*$')]),
      'telCode': new FormControl('380', Validators.required),
      'gender': new FormControl('Male', Validators.required)
    });
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.editMode = true;
      this.contactId = this.route.snapshot.params['id'];
      this.subscription = this.route.params
        .subscribe(
          () => {
            this.store.dispatch(new PhoneBookActions.StartEditing(+this.contactId));
            this.getContactFromStore();
          }
        );
    } else {
      this.subscription = this.route.params
        .subscribe();
    }
  }

  getContactFromStore() {
    this.store.select('contacts', 'editingContact')
      .pipe(take(1))
      .subscribe((contact) => {
          this.setFormValue(contact);
        }
      );
  }

  setFormValue(contact: any) {
    delete contact.id;
    contact.telCode = '380';
    this.signupForm.setValue(contact);
  }

  onSubmit() {
      this.contact = Object.assign({}, {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      phone: this.signupForm.value.telCode + this.signupForm.value.phone,
      gender: this.signupForm.value.gender
    });

    if (this.editMode) {
      this.contact.id = this.contactId;
      this.store.dispatch(new PhoneBookActions.EditContact({id: +this.contactId, contact: this.contact}));
      this.onCloseForm();
    } else {
      this.store.dispatch(new PhoneBookActions.AddContact(this.contact));
    }
    this.store.dispatch(new PhoneBookActions.StoreContact());
    this.signupForm.reset();
  }

  onCloseForm() {
    this.router.navigate(['/phone-book']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new PhoneBookActions.StopAddingEditing());
  }
}
