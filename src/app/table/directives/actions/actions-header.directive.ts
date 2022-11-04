import { Directive, TemplateRef, OnInit } from '@angular/core';

import { TableService } from '../../services';

@Directive({
  selector: '[appTableActionsHeader]',
})
export class TableActionsHeaderDirective implements OnInit {
  constructor(
    private tableService: TableService,
    private template: TemplateRef<void>,
  ) {}

  ngOnInit() {
    this.tableService.templates.addActionsHeader(this.template);
  }
}
