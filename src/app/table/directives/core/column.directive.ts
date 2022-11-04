import { ContentChild, Directive, Input, AfterContentInit } from '@angular/core';

import { TableService } from '../../services';
import { TableCellDirective } from './cell.directive';
import { TableHeaderDirective } from './header.directive';

@Directive({
  selector: '[appTableColumn]',
})
export class TableColumnDirective implements AfterContentInit {

  @Input('appTableColumn') name!: string;

  @ContentChild(TableHeaderDirective)
  header?: TableHeaderDirective;

  @ContentChild(TableCellDirective)
  cell?: TableCellDirective;

  constructor(
    private tableService: TableService,
  ) {}

  ngAfterContentInit() {

    if (this.header) {
      this.tableService.templates.addHeader(this.name, this.header.template);
    }

    if (this.cell) {
      this.tableService.templates.addCell(this.name, this.cell.template);
    }
  }
}
