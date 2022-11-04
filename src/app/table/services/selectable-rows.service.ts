import { merge, Observable, takeUntil } from 'rxjs';

import { range } from '../utils';
import { TableSelectedRows } from '../types';
import { TableEventsService } from './events.service';
import { TableStoreService } from './store.service';

export class TableSelectableRowsService {

  store!: TableStoreService;
  events!: TableEventsService;

  constructor(
    store: TableStoreService,
    events: TableEventsService,
    signal$: Observable<void>,
  ) {
    this.store = store;
    this.events = events;
    this.initResetTriggers(signal$);
  }

  onSelectRow(event: Event, index: number): void {
    event.preventDefault();
    event.stopImmediatePropagation();

    this.store.selectedRows.next((map: any) => {
      const newMap = { ...map };
      newMap[index] = !newMap[index];
      const total = this.store.rows.getCurrent().length;
      const selectedRows = this.getSelectedRows(newMap);
      const selectedCount = selectedRows.length;
      const isChecked = total === selectedCount;
      this.store.masterRowSelector.next(isChecked);
      this.events.selectedRows.next(selectedRows);
      return newMap;
    });
  }

  onSelectAllRows(event: Event): void {
    event.preventDefault();
    event.stopImmediatePropagation();

    const areAllSelected = this.store.masterRowSelector.getCurrent();
    let isChecked = false;
    const newMap: TableSelectedRows = {};

    if (!areAllSelected) {
      const total = this.store.rows.getCurrent().length;
      range(0, total - 1).forEach(index => newMap[index] = true);
      isChecked = true;
    }

    const selectedRows = this.getSelectedRows(newMap);
    this.store.selectedRows.next(newMap);
    this.store.masterRowSelector.next(isChecked);
    this.events.selectedRows.next(selectedRows);
  }

  private getSelectedRows(map: TableSelectedRows): number[] {
    const result: number[] = [];
    for (const _index in map) {
      const index = +_index;
      if (map[index]) result.push(index);
    }
    return result;
  }

  // Selected rows should reset on some table events
  private initResetTriggers(signal$: Observable<void>): void {
    merge(
      this.events.page.event$,
      this.events.pageSize.event$,
      this.events.sorting.event$,
    ).pipe(takeUntil(signal$)).subscribe(() => {
      this.store.masterRowSelector.next(false);
      this.store.selectedRows.next({});
    });
  }
}
