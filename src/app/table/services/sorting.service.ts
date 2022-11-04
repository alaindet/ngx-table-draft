import { TableColumn } from '../types';
import { TableEventsService } from './events.service';
import { TableStoreService } from './store.service';

export class TableSortingService {

  store!: TableStoreService;
  events!: TableEventsService;

  constructor(store: TableStoreService, events: TableEventsService) {
    this.store = store;
    this.events = events;
  }

  onSort(columnName: TableColumn['name']): void {
    let sorting = this.store.sorting.getCurrent();

    // No sorting yet
    if (!sorting) {
      sorting = { by: columnName, dir: 'ASC' };
    }

    // Flip sorting direction
    else if (sorting.by === columnName) {
      sorting.dir = (sorting.dir === 'ASC' ? 'DESC' : 'ASC');
    }

    // Just set the new sorting
    else {
      sorting.by = columnName;
      sorting.dir = 'ASC';
    }

    this.store.sorting.next(sorting);
    this.events.sorting.next(sorting);
  }
}
