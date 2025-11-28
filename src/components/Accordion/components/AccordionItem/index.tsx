import { IAccordionItemProps } from './types';

export function AccordionItem({ children }: IAccordionItemProps) {
  return <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg">{children}</div>;
}
