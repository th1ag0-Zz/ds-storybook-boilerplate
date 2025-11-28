
import { DocPropTable } from '../../../../../../stories/components/DocPropTable';
import { IComponentPropsTable } from 'src/stories/components/DocPropTableTabs/types';

import { accordionComponentsProps } from './props';
import { AccordionComponentsValuesEnum } from './components';

const accordionPropsTable: IComponentPropsTable[] = [
  {
    componentName: AccordionComponentsValuesEnum.ROOT,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.ROOT]} />
    ),
  },
  {
    componentName: AccordionComponentsValuesEnum.ITEM,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.ITEM]} />
    ),
  },
  {
    componentName: AccordionComponentsValuesEnum.TRIGGER,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.TRIGGER]} />
    ),
  },
  {
    componentName: AccordionComponentsValuesEnum.CONTENT,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.CONTENT]} />
    ),
  },
];

export { accordionPropsTable };
