import { Observable } from 'rxjs';

import { DataSource } from '../utils';
import { TableRuntimeRow, Alignments, TableRuntimeColumn, TableSorting, TablePagination, TableI18n, TableSelectedRows } from '../types';
import { getDefaultI18n, getDefaultPagination } from '../utils';

export class TableStoreService {

  rows!: DataSource<TableRuntimeRow[]>;
  columns!: DataSource<TableRuntimeColumn[]>;
  loading!: DataSource<boolean>;
  alignments!: DataSource<Alignments>;
  i18n!: DataSource<TableI18n>;
  withActions!: DataSource<boolean>;
  withSorting!: DataSource<boolean>;
  sorting!: DataSource<TableSorting | null>;
  withPagination!: DataSource<boolean>;
  pagination!: DataSource<TablePagination>;
  withSelectableRows!: DataSource<boolean>;
  selectedRows!: DataSource<TableSelectedRows>;
  masterRowSelector!: DataSource<boolean>;
  // ...

  constructor(signal$: Observable<void>) {
    this.rows = new DataSource<TableRuntimeRow[]>([], signal$);
    this.columns = new DataSource<TableRuntimeColumn[]>([], signal$);
    this.loading = new DataSource<boolean>(false, signal$);
    this.alignments = new DataSource<Alignments>({}, signal$);
    this.i18n = new DataSource<TableI18n>(getDefaultI18n(), signal$);
    this.withActions = new DataSource<boolean>(false, signal$);
    this.withSorting = new DataSource<boolean>(false, signal$);
    this.sorting = new DataSource<TableSorting | null>(null, signal$);
    this.withPagination = new DataSource<boolean>(false, signal$);
    this.pagination = new DataSource<TablePagination>(getDefaultPagination(), signal$);
    this.withSelectableRows = new DataSource<boolean>(false, signal$);
    this.selectedRows = new DataSource<TableSelectedRows>({}, signal$);
    this.masterRowSelector = new DataSource<boolean>(false, signal$);
    // ...
  }
}
