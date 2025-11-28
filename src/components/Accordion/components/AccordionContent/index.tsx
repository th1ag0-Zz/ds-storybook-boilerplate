import { IAccordionContentProps } from './types';

export function AccordionContent({ children, isOpen }: IAccordionContentProps) {
  if (!isOpen) return null;

  return (
    <div data-testid="accordion-content" className="p-4 pt-0">
      <div className="text-sm text-zinc-500">{children}</div>
    </div>
  );
}
