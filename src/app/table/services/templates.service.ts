import { TemplateRef } from '@angular/core';

import { TableCellTemplate, TableCellTemplates, TableHeaderTemplate, TableHeaderTemplates, TableActionsTemplates, TableActionCellTemplate } from '../types';

export class TableTemplatesService {

  headers: TableHeaderTemplates = {};
  cells: TableCellTemplates = {};
  actions: TableActionsTemplates = { header: null, cell: null };

  addHeader(columnName: string, template: TableHeaderTemplate): void {
    this.headers[columnName] = template;
  }

  addCell(columnName: string, template: TableCellTemplate): void {
    this.cells[columnName] = template;
  }

  addActionsHeader(template: TemplateRef<void>): void {
    this.actions.header = template;
  }

  addActionsCell(template: TableActionCellTemplate): void {
    this.actions.cell = template;
  }
}
