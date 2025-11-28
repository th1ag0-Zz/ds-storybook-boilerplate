import { twMerge } from 'tailwind-merge';
import { ITabsContentProps } from './types';
import { useTabsContext } from '../../contexts/TabsContext';

export function TabsContent({ value, className, children, ...props }: ITabsContentProps) {
  const { selectedTab } = useTabsContext();
  const isSelected = selectedTab === value;

  if (!isSelected) return null;

  return (
    <div
      className={twMerge(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
