import { TemplateRef } from '@angular/core';

export type Alignment = 'start' | 'center' | 'end';

export interface Alignments {
  [columnName: string]: { x: Alignment, y: Alignment };
}

export interface TableRow {
  [property: string]: any;
}

export interface TableRuntimeRow extends TableRow {
  $index: number;
}

export interface TableColumn {
  name: string;
  title: string;
  alignX?: Alignment;
  alignY?: Alignment;
  sortable?: boolean;
}

export interface TableRuntimeColumn extends TableColumn {
  $index: number;
}

// Header templates -----------------------------------------------------------
export interface TableHeaderTemplateContext {
  $implicit: TableRuntimeColumn;
}

export type TableHeaderTemplate = TemplateRef<TableHeaderTemplateContext>;

export interface TableHeaderTemplates {
  [columnName: string]: TableHeaderTemplate;
}

// Cell templates -------------------------------------------------------------
export interface TableCellTemplateContext {
  $implicit: TableRuntimeRow;
  col: TableRuntimeColumn;
}

export type TableCellTemplate = TemplateRef<TableCellTemplateContext>;

export interface TableCellTemplates {
  [columnName: string]: TableCellTemplate;
}

// Internationalization -------------------------------------------------------
export interface TableI18n {
  rowsPerPage: string;
  of: string;
}
