import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { elidedRange } from '../../utils';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePaginatorComponent implements OnChanges {
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() pageSizes = [10, 20, 50, 100];
  @Input() total = 1;
  @Input() i18nRowsPerPage = 'Rows per page';
  @Input() i18nOf = 'of';

  @Output() pageClicked = new EventEmitter<number>();
  @Output() pageSizeClicked = new EventEmitter<number>();

  pages!: number;
  lowerBound!: number;
  upperBound!: number;
  prevPage!: number;
  isPrevPage!: boolean;
  nextPage!: number;
  isNextPage!: boolean;
  pageLinks!: (number | null)[];

  ngOnChanges() {
    this.pages = Math.ceil(this.total / this.pageSize);

    this.lowerBound = (this.page - 1) * this.pageSize + 1;
    this.upperBound = Math.min(this.total, this.page * this.pageSize);

    this.prevPage = Math.max(1, this.page - 1);
    this.isPrevPage = this.page - 1 !== 0;

    this.nextPage = Math.min(this.page + 1, this.pages);
    this.isNextPage = this.page + 1 <= this.pages;

    this.pageLinks = elidedRange(this.pages, this.page, 3);
  }

  onPageClick(page: number): void {
    this.pageClicked.emit(page);
  }

  // TODO: Change with custom select component
  onPageSizeClick(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const pageSize = +target.value;
    this.pageSizeClicked.emit(pageSize);
  }
}
