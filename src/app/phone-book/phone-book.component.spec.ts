import { TestBed, async } from '@angular/core/testing';
import { PhoneBookComponent } from './phone-book-component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../shared/services/contact.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PhoneBookComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([]),
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        PhoneBookComponent,
      ],
      providers: [
        ContactService
      ]
    }).compileComponents();
  }));

  it('should create the PhoneBookComponent', () => {
    const fixture = TestBed.createComponent(PhoneBookComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});