import { Directive, TemplateRef } from '@angular/core';

import { TableCellTemplateContext } from '../../types';

@Directive({
  selector: '[appTableCell]',
})
export class TableCellDirective {
  constructor(
    public template: TemplateRef<TableCellTemplateContext>,
  ) {}
}
