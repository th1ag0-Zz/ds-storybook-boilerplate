import type { ElementType } from 'react';

interface QuickLinkCardProps {
  icon: ElementType;
  iconColor?: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export type { QuickLinkCardProps };
