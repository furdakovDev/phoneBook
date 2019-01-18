import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-custom-cell',
  templateUrl: './gender-cell-renderer.component.html'
})
export class GenderCellRendererComponent implements ICellRendererAngularComp {
  constructor() { }
  params: any;

  agInit(params) {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
