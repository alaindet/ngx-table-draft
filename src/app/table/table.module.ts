import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as fromComponents from './components';
import * as fromDirectives from './directives';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    fromComponents.TableComponent,
    fromComponents.TableSorterComponent,
    fromComponents.TablePaginatorComponent,
    fromDirectives.TableColumnDirective,
    fromDirectives.TableHeaderDirective,
    fromDirectives.TableCellDirective,
    fromDirectives.TableWithPaginationDirective,
    fromDirectives.TableWithActionsDirective,
    fromDirectives.TableActionsHeaderDirective,
    fromDirectives.TableActionsCellDirective,
    fromDirectives.TableActionDirective,
    fromDirectives.TableWithSortingDirective,
    fromDirectives.TableWithSelectableRowsDirective,
  ],
  exports: [
    fromComponents.TableComponent,
    // fromComponents.TableSorterComponent,
    fromComponents.TablePaginatorComponent,
    fromDirectives.TableColumnDirective,
    fromDirectives.TableHeaderDirective,
    fromDirectives.TableCellDirective,
    fromDirectives.TableWithActionsDirective,
    fromDirectives.TableActionsHeaderDirective,
    fromDirectives.TableActionsCellDirective,
    fromDirectives.TableActionDirective,
    fromDirectives.TableWithSortingDirective,
    fromDirectives.TableWithPaginationDirective,
    fromDirectives.TableWithSelectableRowsDirective,
  ],
})
export class TableComponentModule {}
