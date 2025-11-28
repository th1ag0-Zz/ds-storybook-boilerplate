import { twMerge } from 'tailwind-merge';
import { ITabsTriggerProps } from './types';
import { useTabsContext } from '../../contexts/TabsContext';

export function TabsTrigger({ value, className, children, ...props }: ITabsTriggerProps) {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isSelected = selectedTab === value;

  return (
    <button
      data-state={isSelected ? 'active' : 'inactive'}
      className={twMerge(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-full',
        isSelected && 'bg-neutral-100 text-white',
        className,
      )}
      onClick={() => setSelectedTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}
