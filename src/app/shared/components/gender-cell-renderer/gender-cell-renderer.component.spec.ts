import { TestBed, async } from '@angular/core/testing';
import { GenderCellRendererComponent } from './gender-cell-renderer.component';
import { AgGridModule } from 'ag-grid-angular';

describe('GenderCellRendererComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([])
      ],
      declarations: [
        GenderCellRendererComponent,
      ]
    }).compileComponents();
  }));

  it('should create the GenderCellRendererComponent', () => {
    const fixture = TestBed.createComponent(GenderCellRendererComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});