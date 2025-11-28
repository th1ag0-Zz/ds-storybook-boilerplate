import { AccordionRoot } from './components/AccordionRoot';
import { AccordionItem } from './components/AccordionItem';
import { AccordionTrigger } from './components/AccordionTrigger';
import { AccordionContent } from './components/AccordionContent';

import type { IAccordionRootProps } from './components/AccordionRoot/types';
import type { IAccordionItemProps } from './components/AccordionItem/types';
import type { IAccordionTriggerProps } from './components/AccordionTrigger/types';
import type { IAccordionContentProps } from './components/AccordionContent/types';

 const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};

export type {
  IAccordionRootProps,
  IAccordionItemProps,
  IAccordionTriggerProps,
  IAccordionContentProps,
};

export default Accordion