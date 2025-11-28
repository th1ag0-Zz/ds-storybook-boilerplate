import { twMerge } from 'tailwind-merge';
import { ITableBodyProps } from './types';

export function TableBody({ className, ...props }: ITableBodyProps) {
  return <tbody className={twMerge('[&_tr:last-child]:border-0', className)} {...props} />;
}
