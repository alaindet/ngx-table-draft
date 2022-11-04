import { Directive, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { TableService } from '../../services';
import { TableActionEvent, Alignment } from '../../types';

@Directive({
  selector: 'app-table[withActions]',
})
export class TableWithActionsDirective implements OnInit {

  @Input() actionsAlignX: Alignment = 'end';
  @Input() actionsAlignY: Alignment = 'center';

  @Output() actionClicked = new EventEmitter<TableActionEvent>();

  constructor(
    private tableService: TableService,
  ) {}

  ngOnInit() {
    this.tableService.store.withActions.next(true);
    this.tableService.events.action.event$
      .subscribe((action: TableActionEvent | undefined) => this.actionClicked.emit(action));

    this.tableService.store.alignments.next((prev: any) => ({
      ...(prev ?? {}),
      '$action': { x: this.actionsAlignX, y: this.actionsAlignY },
    }));
  }
}
