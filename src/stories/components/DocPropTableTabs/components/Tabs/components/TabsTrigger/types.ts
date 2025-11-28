import { ButtonHTMLAttributes } from 'react';

interface ITabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  isSelected?: boolean;
}

export type { ITabsTriggerProps };
