import { Directive, TemplateRef, OnInit } from '@angular/core';

import { TableService } from '../../services';
import { TableActionCellTemplateContext } from '../../types';

@Directive({
  selector: '[appTableActionsCell]',
})
export class TableActionsCellDirective implements OnInit {
  constructor(
    private tableService: TableService,
    private template: TemplateRef<TableActionCellTemplateContext>,
  ) {}

  ngOnInit() {
    this.tableService.templates.addActionsCell(this.template);
  }
}
