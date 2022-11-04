import { TableColumn, TableRuntimeColumn } from '../types';

export function mapToRuntimeColumns(columns: TableColumn[]): TableRuntimeColumn[] {
  return columns.map((column, i) => ({ $index: i, ...column }));
}
