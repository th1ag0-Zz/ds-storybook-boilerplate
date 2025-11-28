import { twMerge } from 'tailwind-merge';
import { ITableHeaderProps } from './types';

export function TableHeader({ className, ...props }: ITableHeaderProps) {
  return <thead className={twMerge('[&_tr]:border-b', className)} {...props} />;
}
