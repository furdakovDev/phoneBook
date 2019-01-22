import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PhoneBookFormComponent } from './phone-book-form-component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {By} from '@angular/platform-browser';

describe('PhoneBookForm Component tests', () => {
   let component: PhoneBookFormComponent;
   let fixture: ComponentFixture<PhoneBookFormComponent>;

   beforeEach(async () => {
     TestBed.configureTestingModule({
       declarations: [ PhoneBookFormComponent ],
       imports: [
         ReactiveFormsModule,
         RouterTestingModule,
         HttpClientModule,
       ]
     }).compileComponents();

     fixture = TestBed.createComponent(PhoneBookFormComponent);
     component = fixture.componentInstance;
   });

  it('PhoneBookForm Component defined', () => {
   expect(component).toBeDefined();
  });

  it('is form valid when empty', () => {
    const form = component.signupForm;
    form.setValue({
      firstName: '',
      lastName: '',
      telCode: '',
      phone: '',
      gender: ''
    });
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('is form valid when fulfilled', () => {
    const form = component.signupForm;
    form.setValue({
      firstName: 'Vasya',
      lastName: 'Vasilisin',
      telCode: '380',
      phone: '730000000',
      gender: 'Male'
    });
    expect(component.signupForm.valid).toBeTruthy();
  });

  it('is form valid when fulfilled', () => {
    const form = component.signupForm;
    form.setValue({
      firstName: 'Vasya',
      lastName: 'Vasilisin',
      telCode: '380',
      phone: '730000000',
      gender: 'Male'
    });
    expect(component.signupForm.valid).toBeTruthy();
  });

  it('should render validator span when firstName !valid', () => {
    const form = component.signupForm;
    form.controls['firstName'].setValue('111');
    form.controls['firstName'].markAsTouched();
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.help-block'));
    const el: HTMLElement = de.nativeElement;
    expect(form.value['firstName'].valid).toBeFalsy();
    expect(el.innerText).toContain('Please enter a valid First Name!');
  });

  it('should render validator span when lastName !valid', () => {
    const form = component.signupForm;
    form.controls['lastName'].setValue('111');
    form.controls['lastName'].markAsTouched();
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.help-block'));
    const el: HTMLElement = de.nativeElement;
    expect(form.value['lastName'].valid).toBeFalsy();
    expect(el.innerText).toContain('Please enter a valid Last Name!');
  });

  it('should render validator span when phone !valid', () => {
    const form = component.signupForm;
    form.controls['phone'].setValue('11111');
    form.controls['phone'].markAsTouched();
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.help-block'));
    const el: HTMLElement = de.nativeElement;
    expect(form.value['phone'].valid).toBeFalsy();
    expect(el.innerText).toContain('Please enter a valid Phone Number!');
  });

  it('should invalid telCode input if not fulfilled', () => {
    const form = component.signupForm;
    form.controls['telCode'].setValue('');
    form.controls['telCode'].markAsTouched();
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.ng-invalid.ng-touched.form-control'));
    const el: HTMLElement = de.nativeElement;
    expect(form.value['telCode'].valid).toBeFalsy();
    expect(el).toBeDefined();
  });

  it('should invalid gender input if not fulfilled', () => {
    const form = component.signupForm;
    form.controls['gender'].setValue('');
    form.controls['gender'].markAsTouched();
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.ng-invalid.ng-touched.form-control'));
    const el: HTMLElement = de.nativeElement;
    expect(form.value['gender'].valid).toBeFalsy();
    expect(el).toBeDefined();
  });

  it('should disable submit button if form !valid', () => {
    const form = component.signupForm;
    form.controls['telCode'].setValue('');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button[disabled]')).not.toEqual(null);
  });

  it('should enable submit button if form valid', () => {
    const form = component.signupForm;
    form.setValue({
      firstName: 'Vasya',
      lastName: 'Vasilisin',
      telCode: '380',
      phone: '730000000',
      gender: 'Male'
    });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button[disabled]')).toEqual(null);
  });

  it('should change text in submit button if editMode=true;', () => {
    component.editMode = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button[disabled]').textContent).toEqual('Save');
  });

  it('should be submitted if onSubmit method call\'s', () => {
    const form = component.signupForm;
    form.setValue({
      firstName: 'Vasya',
      lastName: 'Vasilisin',
      telCode: '380',
      phone: '730000000',
      gender: 'Male'
    });
    spyOn(component, 'onSubmit').and.callFake(() => {
      component.submitted = true;
    });
    component.onSubmit();
    fixture.detectChanges();
    expect(component.submitted).toEqual(true);
  });

  // it('should call onSubmit method when submit button clicked', () => {
  //   const form = component.signupForm;
  //   form.setValue({
  //     firstName: 'Vasya',
  //     lastName: 'Vasilisin',
  //     telCode: '380',
  //     phone: '730000000',
  //     gender: 'Male'
  //   });
  //   const button = fixture.debugElement.query(By.css('.btn-success'));
  //   button.triggerEventHandler('click', null);
  //   spyOn(component, 'onSubmit');
  //   fixture.detectChanges();
  //   expect(component.onSubmit).toHaveBeenCalled();
  // });



  // it('On Init method testing if editMode', () => {
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   component.route.snapshot.params['id'] = '13';
  //   expect(component.submitted).toEqual(true);
  // });

});
