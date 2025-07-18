

import * as TabsPrimitive from '@radix-ui/react-tabs;'';
import { cn } from '@/lib/utils;'';
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;''';
    ref={ref};''';
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',;'';

  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;''';
    ref={ref};''';
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',;'';
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>'';
>(({ className, ...props }, ref) => ('';
    ref={ref}'';
    className={cn('';
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm','';
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;''';
    ref={ref};''';
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',;'';
));''';
export { Tabs, TabsList, TabsTrigger, TabsContent };''';
''''''';
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>'';
>(({ className, ...props }, ref) => ('';
    ref={ref}'';
    className={cn('';
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2','';
))'';
TabsContent.displayName = TabsPrimitive.Content.displayName'';
export { Tabs, TabsList, TabsTrigger, TabsContent }'';
'''''''