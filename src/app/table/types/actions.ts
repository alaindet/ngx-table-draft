import { TemplateRef } from '@angular/core';

import { TableRuntimeRow } from './core';

export interface TableActionCellTemplateContext {
  $implicit: TableRuntimeRow;
}

export type TableActionCellTemplate = TemplateRef<TableActionCellTemplateContext>;

export interface TableActionsTemplates {
  header: TemplateRef<void> | null;
  cell: TableActionCellTemplate | null;
}

export interface TableActionEvent {
  name: string;
  rowIndex: number;
}
