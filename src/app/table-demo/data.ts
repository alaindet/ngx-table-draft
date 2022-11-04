import { TableColumn, TableRow } from '../table';

export const BASIC_COLUMNS: TableColumn[] = [
  {
    name: 'id',
    title: 'ID',
    alignX: 'center',
    sortable: true,
  },
  {
    name: 'status',
    title: 'Status',
  },
  {
    name: 'name',
    title: 'Name',
  },
  {
    name: 'createdOn',
    title: 'Created On',
    sortable: true,
  },
];

export const BASIC_ROWS: TableRow[] = [
  {
    id: 1,
    status: { label: 'Reopen', color: 'yellow' },
    name: 'Alex',
    createdOn: Date.now(),
  },
  {
    id: 2,
    status: { label: 'Accepted', color: 'green' },
    name: 'Bryan',
    createdOn: Date.now(),
  },
  {
    id: 3,
    status: { label: 'Rejected', color: 'red' },
    name: 'Claire',
    createdOn: Date.now(),
  },
  {
    id: 4,
    status: { label: 'Completed', color: 'blue' },
    name: 'Dorian',
    createdOn: Date.now(),
  },
];

export const CLIENT_SIDE_COLUMNS: TableColumn[] = [
  { name: 'id', title: 'ID', sortable: true },
  { name: 'status', title: 'Status', sortable: true },
  { name: 'date', title: 'Date', sortable: true },
  { name: 'location', title: 'Location', sortable: false },
  { name: 'scope', title: 'Scope', sortable: true },
];

export const CLIENT_SIDE_ROWS: TableRow[] = [
  {
    id: '0123456789',
    status: { label: 'Rejected', color: 'red' },
    date: (new Date('2022/08/07 15:06:07')).getTime(),
    location: 'London',
    scope: 'Quality',
  },
  {
    id: '7458327459',
    status: { label: 'Rejected', color: 'red' },
    date: (new Date('2022/08/03 15:06:07')).getTime(),
    location: 'London',
    scope: 'Quality',
  },
  {
    id: '1890128304',
    status: { label: 'Reopen', color: 'yellow' },
    date: (new Date('2022/08/01 18:06:07')).getTime(),
    location: 'Rome',
    scope: 'Environment',
  },
  {
    id: '231234187',
    status: { label: 'Rejected', color: 'red' },
    date: (new Date('2022/08/06 15:06:07')).getTime(),
    location: 'London',
    scope: 'Health',
  },
  {
    id: '54891273',
    status: { label: 'Reopen', color: 'yellow' },
    date: (new Date('2022/08/02 10:06:07')).getTime(),
    location: 'Paris',
    scope: 'Health',
  },
  {
    id: '89123874',
    status: { label: 'Completed', color: 'blue' },
    date: (new Date('2022/08/01 15:06:07')).getTime(),
    location: 'London',
    scope: 'Environment',
  },
  {
    id: '0123456789',
    status: { label: 'Released', color: 'grey' },
    date: (new Date('2022/08/07 15:06:07')).getTime(),
    location: 'Paris',
    scope: 'Environment',
  },
  {
    id: '0123456789',
    status: { label: 'Released', color: 'grey' },
    date: (new Date('2022/03/04 03:06:07')).getTime(),
    location: 'London',
    scope: 'Quality',
  },
  {
    id: '0123456789',
    status: { label: 'Accepted', color: 'green' },
    date: (new Date('2022/07/07 15:06:07')).getTime(),
    location: 'Paris',
    scope: 'Environment',
  },
  {
    id: '0123456789',
    status: { label: 'Accepted', color: 'green' },
    date: (new Date('2022/08/07 09:06:07')).getTime(),
    location: 'Rome',
    scope: 'Quality',
  },
  {
    id: '0123456789',
    status: { label: 'Accepted', color: 'green' },
    date: (new Date('2022/04/04 14:06:07')).getTime(),
    location: 'Rome',
    scope: 'Health',
  },
  {
    id: '0123456789',
    status: { label: 'Rejected', color: 'red' },
    date: (new Date('2022/06/07 15:06:07')).getTime(),
    location: 'Rome',
    scope: 'Health',
  },
];
