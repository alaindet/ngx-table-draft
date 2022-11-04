import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

import { TableService } from '../../services';
import { TableRowSelectionEvent } from '../../types';

@Directive({
  selector: 'app-table[withSelectableRows]',
})
export class TableWithSelectableRowsDirective implements OnInit {

  @Output() selectionChange = new EventEmitter<TableRowSelectionEvent>();

  constructor(
    private tableService: TableService,
  ) {}

  ngOnInit() {
    this.tableService.store.withSelectableRows.next(true);
    this.tableService.events.selectedRows.event$
      .subscribe((event: TableRowSelectionEvent | undefined) => this.selectionChange.emit(event));
  }
}
