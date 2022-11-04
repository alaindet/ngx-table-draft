export interface TablePagination {
  page: number;
  pageSize: number;
  pageSizes: number[];
  total: number;
}

export type TablePaginationPageEvent = number;

export type TablePaginationPageSizeEvent = number;
