import { TestBed, async } from '@angular/core/testing';
import { ContactDetailComponent } from './contact-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        ContactDetailComponent,
      ]
    }).compileComponents();
  }));

  it('should create the ContactDetailComponent', () => {
    const fixture = TestBed.createComponent(ContactDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
