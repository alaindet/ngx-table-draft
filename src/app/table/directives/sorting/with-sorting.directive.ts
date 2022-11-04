import { Directive, EventEmitter, OnInit, Input, Output, OnChanges } from '@angular/core';

import { TableService } from '../../services';
import { TableSortingEvent, TableSorting } from '../../types';

@Directive({
  selector: 'app-table[withSorting]',
})
export class TableWithSortingDirective implements OnInit, OnChanges {

  @Input() sortBy?: TableSorting['by'];
  @Input() sortDir?: TableSorting['dir'];

  @Output() sortingClicked = new EventEmitter<TableSortingEvent>();

  constructor(
    private tableService: TableService,
  ) {}

  ngOnInit()  {
    this.tableService.store.withSorting.next(true);
    this.tableService.events.sorting.event$
      .subscribe((sorting: TableSorting | undefined) => this.sortingClicked.emit(sorting));
  }

  ngOnChanges() {
    if (this.sortBy) {
      this.tableService.store.sorting.next({
        by: this.sortBy,
        dir: this.sortDir ?? 'ASC',
      });
    }
  }
}
