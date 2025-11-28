
import { IProps } from 'src/stories/components/DocPropTable/types';
import { AccordionComponentsValuesEnum } from './components';

const accordionRootProps: IProps[] = [
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Pass in the children that will be rendered within the Accordion',
    defaultValue: 'null',
  },
];

const accordionItemProps: IProps[] = [
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Pass in the children that will be rendered within the Accordion',
    defaultValue: 'null',
  },
];

const accordionTriggerProps: IProps[] = [
  {
    name: 'title',
    type: 'string',
    description: 'Determine the title of the Accordion',
    defaultValue: '""',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    description: 'Specify whether an individual Content should be opened',
    defaultValue: 'false',
  },
  {
    name: 'onClick',
    type: 'string',
    description: 'Pass an event to occur when the trigger is clicked',
    defaultValue: '() => {}',
  },
];

const accordionContentProps: IProps[] = [
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Pass in the children that will be rendered within the Accordion',
    defaultValue: 'null',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    description: 'Specify whether an individual Content should be opened',
    defaultValue: 'false',
  },
];

const accordionComponentsProps = {
  [AccordionComponentsValuesEnum.ROOT]: accordionRootProps,
  [AccordionComponentsValuesEnum.ITEM]: accordionItemProps,
  [AccordionComponentsValuesEnum.TRIGGER]: accordionTriggerProps,
  [AccordionComponentsValuesEnum.CONTENT]: accordionContentProps,
};

export { accordionComponentsProps };
