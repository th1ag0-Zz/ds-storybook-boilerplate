import { twMerge } from 'tailwind-merge';
import { ITableCellProps } from './types';

export function TableCell({ className, ...props }: ITableCellProps) {
  return (
    <td
      className={twMerge('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  );
}
