import { ReactNode } from 'react';

interface IComponents {
  value: string;
  name: string;
}

interface IComponentPropsTable {
  componentName: string;
  component: ReactNode;
}

interface IDocPropTableTabsProps {
  components: IComponents[];
  componentsPropsTable: IComponentPropsTable[];
}

export type { IComponentPropsTable, IDocPropTableTabsProps };
