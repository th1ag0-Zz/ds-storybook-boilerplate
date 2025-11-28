import { Tabs } from './components/Tabs'; 
import { IDocPropTableTabsProps } from './types';

export const DocPropTableTabs = ({ components, componentsPropsTable }: IDocPropTableTabsProps) => {
  return (
    <Tabs.Root defaultValue={components[0]?.value}>
      <Tabs.List>
        {components?.map(component => (
          <Tabs.Trigger key={component?.value} className="text-white" value={component?.value}>
            {component?.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {componentsPropsTable?.map(element => (
        <Tabs.Content key={element?.componentName} value={element?.componentName}>
          {element?.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
