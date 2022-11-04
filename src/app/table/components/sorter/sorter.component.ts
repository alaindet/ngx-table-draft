import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { TableSortingDirection } from '../../types';

@Component({
  selector: 'app-table-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSorterComponent {

  @Input() title: string = '';

  @Input('dir')
  set dirInput(dir: TableSortingDirection | null) {
    this.cssClass = (dir !== null) ? `-dir-${dir}` : '';
  }

  @HostBinding('class')
  cssClass?: string;
}
