enum AccordionComponentsValuesEnum {
  ROOT = 'root',
  ITEM = 'item',
  TRIGGER = 'trigger',
  CONTENT = 'content',
}

enum AccordionComponentsNamesEnum {
  ROOT = 'Accordion.Root',
  ITEM = 'Accordion.Item',
  TRIGGER = 'Accordion.Trigger',
  CONTENT = 'Accordion.Content',
}

const accordionComponents = [
  {
    value: AccordionComponentsValuesEnum.ROOT,
    name: AccordionComponentsNamesEnum.ROOT,
  },
  {
    value: AccordionComponentsValuesEnum.ITEM,
    name: AccordionComponentsNamesEnum.ITEM,
  },
  {
    value: AccordionComponentsValuesEnum.TRIGGER,
    name: AccordionComponentsNamesEnum.TRIGGER,
  },
  {
    value: AccordionComponentsValuesEnum.CONTENT,
    name: AccordionComponentsNamesEnum.CONTENT,
  },
];

export { AccordionComponentsValuesEnum, AccordionComponentsNamesEnum, accordionComponents };
