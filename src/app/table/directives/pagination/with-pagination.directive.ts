import { Directive, EventEmitter, OnInit, Input, Output, OnChanges } from '@angular/core';

import { TableService } from '../../services';
import { TablePagination, TablePaginationPageEvent, TablePaginationPageSizeEvent } from '../../types';
import { getDefaultI18n } from '../../utils';

@Directive({
  selector: 'app-table[withPagination]',
})
export class TableWithPaginationDirective implements OnInit, OnChanges {

  @Input() page: TablePagination['page'] = 1;
  @Input() pageSize: TablePagination['pageSize'] = 10;
  @Input() pageSizes: TablePagination['pageSizes'] = [10, 20, 50, 100];
  @Input() total: TablePagination['total'] = 1;
  @Input() i18nRowsPerPage = 'Rows per page';
  @Input() i18nOf = 'of';

  @Output() pageClicked = new EventEmitter<TablePaginationPageEvent>();
  @Output() pageSizeClicked = new EventEmitter<TablePaginationPageSizeEvent>();

  constructor(
    private tableService: TableService,
  ) {}

  ngOnInit()  {
    this.tableService.store.withPagination.next(true);

    this.tableService.events.page.event$
      .subscribe((page: number | undefined) => this.pageClicked.emit(page));

    this.tableService.events.pageSize.event$
      .subscribe((pageSize: number | undefined) => this.pageSizeClicked.emit(pageSize));
  }

  ngOnChanges() {

    this.tableService.store.i18n.next(prev => ({
      ...(prev ?? getDefaultI18n()),
      rowsPerPage: this.i18nRowsPerPage,
      of: this.i18nOf,
    }));

    this.tableService.store.pagination.next({
      page: this.page,
      pageSize: this.pageSize,
      pageSizes: this.pageSizes,
      total: this.total,
    });
  }
}
