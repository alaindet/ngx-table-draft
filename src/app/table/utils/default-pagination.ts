import { TablePagination } from './../types';

export function getDefaultPagination(): TablePagination {
  return {
    page: 1,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100],
    total: 1,
  };
}
