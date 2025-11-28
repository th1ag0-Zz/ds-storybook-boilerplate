import { TabsRoot } from './components/TabsRoot';
import { TabsList } from './components/TabsList';
import { TabsTrigger } from './components/TabsTrigger';
import { TabsContent } from './components/TabsContent';

import type { ITabsRootProps } from './components/TabsRoot/types';
import type { ITabsListProps } from './components/TabsList/types';
import type { ITabsTriggerProps } from './components/TabsTrigger/types';
import type { ITabsContentProps } from './components/TabsContent/types';

export type { ITabsRootProps, ITabsListProps, ITabsTriggerProps, ITabsContentProps };

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
