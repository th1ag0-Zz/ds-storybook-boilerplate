import { TableRoot } from './components/TableRoot';
import { TableBody } from './components/TableBody';
import { TableCell } from './components/TableCell';
import { TableHead } from './components/TableHead';
import { TableHeader } from './components/TableHeader';
import { TableRow } from './components/TableRow';

import type { ITableRootProps } from './components/TableRoot/types';
import type { ITableBodyProps } from './components/TableBody/types';
import type { ITableCellProps } from './components/TableCell/types';
import type { ITableHeadProps } from './components/TableHead/types';
import type { ITableHeaderProps } from './components/TableHeader/types';
import type { ITableRowProps } from './components/TableRow/types';

export type {
  ITableRootProps,
  ITableBodyProps,
  ITableCellProps,
  ITableHeadProps,
  ITableHeaderProps,
  ITableRowProps,
};

export const Table = {
  Root: TableRoot,
  Body: TableBody,
  Cell: TableCell,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
};
