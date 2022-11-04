import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

import { TableService } from '../../services';
import { TableRow, TableColumn, TableHeaderTemplates, TableCellTemplates,TableActionsTemplates, TableRuntimeRow, TableRuntimeColumn, Alignments, TableSorting, TablePagination, TableI18n, TableSelectedRows } from '../../types';
import { mapToRuntimeColumns, mapToRuntimeRows, didInputChange } from '../../utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [TableService],
})
export class TableComponent implements OnInit, OnChanges {

  @Input() isLoading = false;
  @Input() rows: TableRow[] = [];
  @Input() columns: TableColumn[] = [];

  // Template variables
  t__rows!: TableRuntimeRow[];
  t__columns!: TableRuntimeColumn[];
  t__loaded!: boolean;
  t__align!: Alignments;
  t__withActions!: boolean;
  t__withSorting!: boolean;
  t__sorting!: TableSorting | null;
  t__withPagination!: boolean;
  t__pagination!: TablePagination | null;
  t__i18n!: TableI18n;
  t__columnsNumber?:number;
  t__withSelectableRows!: boolean;
  t__selectedRows!: TableSelectedRows;
  t__masterRowSelector!: boolean;

  get t__headerTemplates(): TableHeaderTemplates {
    return this.tableService.templates.headers;
  }

  get t__cellTemplates(): TableCellTemplates {
    return this.tableService.templates.cells;
  }

  get t__actionTemplates(): TableActionsTemplates {
    return this.tableService.templates.actions;
  }

  constructor(
    public tableService: TableService,
  ) {}

  ngOnInit() {
    this.initTemplateVars();
    this.t__columnsNumber = this.columns.length + 1
  }

  ngOnChanges(changes: SimpleChanges) {
    if (didInputChange(changes['rows'])) {
      const runtimeRows = mapToRuntimeRows(this.rows);
      this.tableService.store.rows.next(runtimeRows);
    }

    if (didInputChange(changes['columns'])) {
      const runtimeColumns = mapToRuntimeColumns(this.columns);
      this.tableService.store.columns.next(runtimeColumns);
      this.setColumnsAlignments();
    }
  }

  private initTemplateVars(): void {
    const store = this.tableService.store;

    // Core
    store.rows.data$.subscribe(x => this.t__rows = x);
    store.columns.data$.subscribe(x => this.t__columns = x);
    store.loading.data$.subscribe(x => this.t__loaded = !x);
    store.alignments.data$.subscribe(x => this.t__align = x);
    store.i18n.data$.subscribe(x => this.t__i18n = x);

    // Actions
    store.withActions.data$.subscribe(x => this.t__withActions = x);

    // Sorting
    store.withSorting.data$.subscribe(x => this.t__withSorting = x);
    store.sorting.data$.subscribe(x => this.t__sorting = x);

    // Pagination
    store.withPagination.data$.subscribe(x => this.t__withPagination = x);
    store.pagination.data$.subscribe(x => this.t__pagination = x);

    // Selectable rows
    store.withSelectableRows.data$.subscribe(x => this.t__withSelectableRows = x);
    store.selectedRows.data$.subscribe(x => this.t__selectedRows = x);
    store.masterRowSelector.data$.subscribe(x => this.t__masterRowSelector = x);
  }

  private setColumnsAlignments(): void {

    this.tableService.store.alignments.next(prev => {
      const alignments: Alignments = prev ?? {};
      for (const col of this.columns) {
        const x = col.alignX ?? 'start';
        const y = col.alignY ?? 'center';
        alignments[col.name] = { x, y };
      }
      return { ...alignments };
    });
  }
}
