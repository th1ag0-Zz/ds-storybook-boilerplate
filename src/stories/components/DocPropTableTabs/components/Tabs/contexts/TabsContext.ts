import { createContext, useContext } from 'react';

interface TabsContextData {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

const TabsContext = createContext({} as TabsContextData);

const useTabsContext = () => useContext(TabsContext);

export { TabsContext, useTabsContext };
