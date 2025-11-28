import { twMerge } from 'tailwind-merge';
import { ITabsListProps } from './types';

export function TabsList({ className, ...props }: ITabsListProps) {
  return (
    <div
      className={twMerge(
        'inline-flex h-8 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}
