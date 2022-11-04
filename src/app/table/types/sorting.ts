import { TableColumn } from './core';

export type TableSortingDirection = 'ASC' | 'DESC';

export interface TableSorting {
  by: TableColumn['name'];
  dir: TableSortingDirection;
}

export type TableSortingEvent = TableSorting;
