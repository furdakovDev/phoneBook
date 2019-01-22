import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community/main';
import { HttpClient } from '@angular/common/http';
import { GenderCellRendererComponent } from '../shared/components/gender-cell-renderer/gender-cell-renderer.component';
import { Contact } from './contact.model';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as fromPhoneBook from './store/phone-book.reducers';
import * as PhoneBookActions from './store/phone-book.actions';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book-component.html',
  styleUrls: ['./phone-book-component.scss']
})
export class PhoneBookComponent implements OnInit {
    rowData: Observable<fromPhoneBook.State>;
    gridOptions: GridOptions;
    selectedRow: Contact;
    rowSelected: boolean;

    constructor(private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute,
                private store: Store<fromPhoneBook.FeatureState>) {

      this.gridOptions = <GridOptions>{};
      this.gridOptions.columnDefs = [
        {
          headerName: 'First Name',
          field: 'firstName',
          checkboxSelection: true,
        },
        {
          headerName: 'Last Name',
          field: 'lastName',
          cellEditorFramework: PhoneBookComponent,
        },
        {
          headerName: 'Phone Number',
          field: 'phone',
        },
        {
          headerName: 'Gender',
          field: 'gender',
          cellRendererFramework: GenderCellRendererComponent,
        },
      ];
    }

    deleteContactInGrid() {
      const rowToDelete = this.gridOptions.api.getSelectedRows();
      this.gridOptions.api.updateRowData({
        remove: rowToDelete
        });
    }

    ngOnInit() {
      this.initPhoneBookStore();
    }

    initPhoneBookStore() {
      this.store.select('contacts', 'contacts')
        .pipe(take(1))
        .subscribe((contacts: Contact[]) => {
          if (contacts.length === 0) {
            this.store.dispatch(new PhoneBookActions.GetContacts());
          }
            this.rowData = this.store.select('contacts');
            // this.rowData = this.phoneBookState;
        });
    }

    onSelectedRow() {
      if (this.gridOptions.api.getSelectedRows()[0] !== undefined) {
        this.selectedRow = this.gridOptions.api.getSelectedRows()[0];
        this.rowSelected = true;
      } else { this.rowSelected = false; }
    }

    onAddNewContact() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

    onEditContact() {
      this.router.navigate([this.selectedRow.id, 'edit'], {relativeTo: this.route});
    }

    onShowContactDetails() {
      this.router.navigate([this.selectedRow.id], {relativeTo: this.route});
    }

    onContactDelete() {
      this.deleteContactInGrid();
      this.store.dispatch(new PhoneBookActions.DeleteContact(+this.selectedRow.id));
      this.store.dispatch(new PhoneBookActions.DeleteFromServer());
    }
}
