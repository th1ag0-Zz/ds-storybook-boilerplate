import { HTMLAttributes } from 'react';

interface ITabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  isSelected?: boolean;
}

export type { ITabsContentProps };
