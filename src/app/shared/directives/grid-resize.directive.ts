import { AfterViewInit, Directive, HostListener, Input } from '@angular/core';
import { GridOptions } from 'ag-grid-community/main';

@Directive({
  selector: '[appGridResize]'
})
export class GridResizeDirective implements AfterViewInit {
  @Input() gridOptions: GridOptions;

  constructor() {
  }

  ngAfterViewInit() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  @HostListener('gridSizeChanged')
  gridSizeChanged() {
    this.gridOptions.api.sizeColumnsToFit();
  }
}
