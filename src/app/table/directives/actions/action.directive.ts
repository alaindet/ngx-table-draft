import { Directive, Input, HostListener } from '@angular/core';

import { TableService } from '../../services';
import { asBoolean } from '../../utils';

@Directive({
  selector: '[appTableAction]',
  exportAs:'appTableAction',
})
export class TableActionDirective {

  @Input('appTableAction') name?: string;
  @Input() index!: number;
  @Input() isDisabled?: boolean | string = false;
  @Input() exported: boolean | string = false;

  constructor(
    public tableService: TableService,
  ) {}

  @HostListener('click')
  onClick() {
    if (asBoolean(this.exported)) return;
    this.confirm(this.name ?? "no_action_selected")
  }

  confirm(actionName:string){
    if (asBoolean(this.isDisabled)) return;
    const name = actionName;
    const rowIndex = this.index;
    this.tableService.events.action.next({ name, rowIndex });
  }
}
