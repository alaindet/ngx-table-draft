import { TableRow, TableRuntimeRow } from '../types';

export function mapToRuntimeRows(rows: TableRow[]): TableRuntimeRow[] {
  return rows.map((row, i) => ({ $index: i, ...row }));
}
