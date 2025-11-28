import { IAccordionRootProps } from './types';

export function AccordionRoot({ children }: IAccordionRootProps) {
  return <div className="w-full flex flex-col gap-2">{children}</div>;
}
