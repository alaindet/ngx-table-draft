import { Injectable, OnDestroy } from '@angular/core';

import { OnceSource } from '../utils';
import { TableStoreService } from './store.service';
import { TableEventsService } from './events.service';
import { TableTemplatesService } from './templates.service';
import { TableSortingService } from './sorting.service';
import { TablePaginationService } from './pagination.service';
import { TableSelectableRowsService } from './selectable-rows.service';

@Injectable()
export class TableService implements OnDestroy {

  private once = new OnceSource();

  store!: TableStoreService;
  events!: TableEventsService;
  templates!: TableTemplatesService;
  sorting!: TableSortingService;
  pagination!: TablePaginationService;
  selectableRows!: TableSelectableRowsService;

  constructor() {
    this.store = new TableStoreService(this.once.event$);
    this.events = new TableEventsService(this.once.event$);
    this.templates = new TableTemplatesService();
    this.sorting = new TableSortingService(this.store, this.events);
    this.pagination = new TablePaginationService(this.store, this.events);
    this.selectableRows = new TableSelectableRowsService(this.store, this.events, this.once.event$);
  }

  ngOnDestroy() {
    this.once.trigger();
  }
}
