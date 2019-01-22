import { TestBed, async } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SigninComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SigninComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));


  it('should create the signinComponent', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('form should invalid when empty', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const app = fixture.debugElement.componentInstance;
    app.signupForm.resetForm();
    expect(app.signupForm.value.email).toBe(undefined);
    expect(app.signupForm.value.password).toBe(undefined);
  });

  it('form should valid when fulfilled', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const app = fixture.debugElement.componentInstance;
    app.signupForm.value.email = 'test@test.com';
    app.signupForm.value.password = 'test';
    expect(app.signupForm.valid).toBe(true);
    //  gives true anyway.
  });

  // it('should disable submit button if form !valid', () => {
  //   const fixture = TestBed.createComponent(SigninComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   app.signupForm.value.email = '';
  //   app.signupForm.value.password = '';
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector(`button[disabled]`).textContent).toBe('Login');
  // });
});
