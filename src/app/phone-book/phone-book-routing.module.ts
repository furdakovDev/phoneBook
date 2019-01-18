import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneBookFormComponent } from './phone-book-form/phone-book-form-component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PhoneBookComponent } from './phone-book-component';

const phoneBookRoutes: Routes =  [
  { path: '', component: PhoneBookComponent },
  { path: 'new', component: PhoneBookFormComponent},
  { path: ':id', component: ContactDetailComponent },
  { path: ':id/edit', component: PhoneBookFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(phoneBookRoutes)
  ],
  exports: [RouterModule]
})
export class PhoneBookRoutingModule {}
