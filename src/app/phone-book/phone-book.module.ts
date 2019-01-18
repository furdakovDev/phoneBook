import { NgModule } from '@angular/core';
import { PhoneBookRoutingModule } from './phone-book-routing.module';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { PhoneBookComponent } from './phone-book-component';
import { PhoneBookFormComponent } from './phone-book-form/phone-book-form-component';
import { GenderCellRendererComponent } from '../shared/components/gender-cell-renderer/gender-cell-renderer.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { GridResizeDirective } from '../shared/directives/grid-resize.directive';
import { phoneBookReducers } from './store/phone-book.reducers';
import { PhoneBookEffects } from './store/phone-book.effects';

@NgModule({
  declarations: [
    PhoneBookComponent,
    PhoneBookFormComponent,
    GenderCellRendererComponent,
    ContactDetailComponent,
    GridResizeDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PhoneBookRoutingModule,
    AgGridModule.withComponents([]),
    StoreModule.forFeature('contacts', phoneBookReducers),
    EffectsModule.forFeature([PhoneBookEffects])
  ],
    entryComponents: [ GenderCellRendererComponent ]
})

export class PhoneBookModule {}
