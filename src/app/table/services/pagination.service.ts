import { TablePagination } from '../types';
import { getDefaultPagination } from '../utils';
import { TableEventsService } from './events.service';
import { TableStoreService } from './store.service';

export class TablePaginationService {

  store!: TableStoreService;
  events!: TableEventsService;

  constructor(store: TableStoreService, events: TableEventsService) {
    this.store = store;
    this.events = events;
  }

  onPageClicked(page: number): void {
    this.store.pagination.next((prev: TablePagination) => {
      const state = prev ?? getDefaultPagination();
      return { ...state, page };
    });
    this.events.page.next(page);
  }

  onPageSizeClicked(pageSize: number): void {
    this.store.pagination.next((prev: TablePagination) => {
      const state = prev ?? getDefaultPagination();
      return { ...state, pageSize };
    });
    this.events.pageSize.next(pageSize);
  }
}
