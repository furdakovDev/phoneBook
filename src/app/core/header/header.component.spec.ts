import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`should have as title 'test-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('test-app');
  // });

  // it('should display signin and signup links if user not logged in', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('ng-template'));
  //   // expect(compiled.querySelector('#signin'));
  //   // expect(compiled.querySelector('#signup'));
  // });

  // it('should display userName and Logout links if user logged in', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const authService = fixture.debugElement.injector.get(AuthService);
  //   authService.token = '';
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#currentUserName').firstChild.textContent).toContain(authService.currentUserName);
  //   expect(compiled.querySelector('#logout'));
  // });
  // // firebase
});
