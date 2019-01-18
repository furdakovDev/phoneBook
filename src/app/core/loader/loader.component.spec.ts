import { TestBed, async } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoaderComponent,
      ]
    }).compileComponents();
  }));

  it('should create the LoaderComponent', () => {
    const fixture = TestBed.createComponent(LoaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});