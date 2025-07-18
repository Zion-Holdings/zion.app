

import * as MenubarPrimitive from '@radix-ui/react-menubar;'';
import { cn } from '@/lib/utils;'';
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;''';
    ref={ref};''';
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',;'';

  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;''';
    ref={ref};''';
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',;'';
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>'';
>(({ className, ...props }, ref) => ('';
    ref={ref}'';
    className={cn('';
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground','';
  };''';
    ref={ref};''';
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',;;'';
      inset && 'pl-8',;'';
      className,;''';
  >;'''