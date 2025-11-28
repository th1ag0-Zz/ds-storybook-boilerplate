import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ITabsRootProps } from './types';
import { TabsContext } from '../../contexts/TabsContext';

export function TabsRoot({ defaultValue = '', className, children, ...props }: ITabsRootProps) {
  const [selectedTabState, setSelectedTabState] = useState(defaultValue);

  const value = {
    selectedTab: selectedTabState,
    setSelectedTab: setSelectedTabState,
  };

  return (
    <TabsContext.Provider value={value}>
      <div className={twMerge('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
