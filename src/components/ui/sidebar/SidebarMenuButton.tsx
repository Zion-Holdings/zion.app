<<<<<<< HEAD;

import { cn } from '@/lib/utils;'';

  SidebarMenuButtonProps;''';
  const Comp: unknown = asChild ? Slot : 'button;'';
    <Comp;''';
        'flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors',;;'';
        'text-muted-foreground hover:text-foreground hover:bg-accent',;;'';
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',;'';
      {children};''';
});''';
SidebarMenuButton.displayName = 'SidebarMenuButton;'';
''''''';
'';
export const SidebarMenuButton = forwardRef<'';
  SidebarMenuButtonProps'';
>(({ className, children, asChild = false, ...props }, ref) => {'';
  const Comp = asChild ? Slot : 'button'';
    <Comp'';
      className={cn('';
        'flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors','';
        'text-muted-foreground hover:text-foreground hover:bg-accent','';
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring','';
      {children}'';
    </Comp>'';
})'';
'';
SidebarMenuButton.displayName = 'SidebarMenuButton'';
'''''''