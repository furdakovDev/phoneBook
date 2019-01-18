import { TestBed, async } from '@angular/core/testing';
import { GridResizeDirective } from './grid-resize.directive';

describe('GridResizeDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GridResizeDirective,
      ]
    }).compileComponents();
  }));

  it('should create the GridResizeDirective', () => {
    const fixture = TestBed.createComponent(GridResizeDirective);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});