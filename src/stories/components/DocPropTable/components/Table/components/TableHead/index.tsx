import { twMerge } from 'tailwind-merge';
import { ITableHeadProps } from './types';

export function TableHead({ className, ...props }: ITableHeadProps) {
  return (
    <th
      className={twMerge(
        'h-8 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  );
}
