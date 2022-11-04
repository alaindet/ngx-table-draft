import { Directive, TemplateRef } from '@angular/core';

import { TableHeaderTemplateContext } from '../../types';

@Directive({
  selector: '[appTableHeader]',
})
export class TableHeaderDirective {
  constructor(
    public template: TemplateRef<TableHeaderTemplateContext>,
  ) {}
}
