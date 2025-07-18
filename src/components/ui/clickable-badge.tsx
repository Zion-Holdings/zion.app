

import { X } from '@/components/ui/icons;'';

import { badgeVariants } from '@/components/ui/badge-variants;''';
  extends React.HTMLAttributes<HTMLDivElement> {;''';
  variant?: 'default' | 'secondary' | 'destructive' | 'outline;'';
};''';
  children,;''';
  variant = 'default',;'';
}: ClickableBadgeProps) {;''';
      className={cn(;''';
        'group flex items-center gap-1',;;'';
        onRemove && 'pl-2.5 pr-1.5 py-1',;'';
      {...props};''';
      {onRemove && (;'''