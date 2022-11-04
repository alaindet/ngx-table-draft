import { Observable } from 'rxjs';

import { EventSource } from '../utils';
import { TableActionEvent, TablePaginationPageEvent, TablePaginationPageSizeEvent, TableRowSelectionEvent, TableSortingEvent } from '../types';

export class TableEventsService {

  action!: EventSource<TableActionEvent>;
  sorting!: EventSource<TableSortingEvent>;
  page!: EventSource<TablePaginationPageEvent>;
  pageSize!: EventSource<TablePaginationPageSizeEvent>;
  selectedRows!: EventSource<TableRowSelectionEvent>;
  // ...

  constructor(signal$: Observable<void>) {
    this.action = new EventSource<TableActionEvent>(signal$);
    this.sorting = new EventSource<TableSortingEvent>(signal$);
    this.page = new EventSource<TablePaginationPageEvent>(signal$);
    this.pageSize = new EventSource<TablePaginationPageSizeEvent>(signal$);
    this.selectedRows = new EventSource<TableRowSelectionEvent>(signal$);
    // ...
  }
}
