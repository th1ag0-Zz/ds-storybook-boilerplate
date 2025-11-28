import { twMerge } from 'tailwind-merge';
import { ITableRowProps } from './types';

export function TableRow({ className, ...props }: ITableRowProps) {
  return (
    <tr
      className={twMerge(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className,
      )}
      {...props}
    />
  );
}
