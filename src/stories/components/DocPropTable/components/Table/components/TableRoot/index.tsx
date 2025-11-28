import { twMerge } from 'tailwind-merge';
import { ITableRootProps } from './types';

export function TableRoot({ className, ...props }: ITableRootProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={twMerge('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  );
}
