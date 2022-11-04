import { Component } from '@angular/core';

import { TableColumn, TableRow } from '../table';
import { BASIC_COLUMNS, BASIC_ROWS } from './data';

@Component({
  selector: 'app-table-demo',
	templateUrl: './table.component.html',
})
export class DemoTableComponent {

  consoleLog = console.log;
  basicColumns: TableColumn[] = BASIC_COLUMNS;
  basicRows: TableRow[] = BASIC_ROWS;
}
