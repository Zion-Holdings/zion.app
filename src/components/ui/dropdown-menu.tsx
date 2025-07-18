<<<<<<< HEAD
import React from 'react';;
import * as React from 'react';;
import { Check, ChevronRight } from '@/components/ui/icons;;
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu;'
;;
import { cn } from '@/lib/utils;'

const DropdownMenu: unknown = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger: unknown = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup: unknown = DropdownMenuPrimitive.Group;

const DropdownMenuPortal: unknown = DropdownMenuPrimitive.Portal;

const DropdownMenuSub: unknown = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup: unknown = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger: unknown = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {;
    inset?: boolean;
  };''
>(({ className, inset, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref};''
    className={cn(;;
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',;;'
      inset && 'pl-8',;'
      className,;''
    )};
    {...props};
  >;''
    {children};;
    <ChevronRight className="ml-auto h-4 w-4" />;"
=======
import React from 'react'
import * as React from 'react''
import { Check, ChevronRight } from '@/components/ui/icons'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/lib/utils'

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {;
    inset?: boolean;
  }'
>(({ className, inset, children, ...props }, ref) => ('
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}'
    className={cn('
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent','
      inset && 'pl-8','
      className,'
    )}'
    {...props};
  >'
    {children}'
    <ChevronRight className="ml-auto h-4 w-4 />
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  </DropdownMenuPrimitive.SubTrigger>;
));
DropdownMenuSubTrigger.displayName =;
  DropdownMenuPrimitive.SubTrigger.displayName;
<<<<<<< HEAD

const DropdownMenuSubContent: unknown = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>;""
>(({ className, ...props }, ref) => (;";""
  <DropdownMenuPrimitive.SubContent;";";""
    ref={ref};";";";""
    className={cn(;";";";";""
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',;'
      className,;
    )};
=======

const DropdownMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,;"
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>"
>(({ className, ...props }, ref) => (;"
  <DropdownMenuPrimitive.SubContent;
    ref={ref}"
    className={cn(;"
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
DropdownMenuSubContent.displayName =;
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
>(({ className, sideOffset = 4, ...props }, ref) => (;
<<<<<<< HEAD
  <DropdownMenuPrimitive.Portal>;''
    <DropdownMenuPrimitive.Content;
      ref={ref};
      sideOffset={sideOffset};''
      className={cn(;;
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',;'
        className,;
      )};
=======
  <DropdownMenuPrimitive.Portal>'
    <DropdownMenuPrimitive.Content'
      ref={ref};
      sideOffset={sideOffset}'
      className={cn('
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2','
        className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      {...props};
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;
<<<<<<< HEAD
  };''
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref};''
    className={cn(;;
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',;;'
      inset && 'pl-8',;'
      className,;
    )};
=======
  }'
>(({ className, inset, ...props }, ref) => ('
  <DropdownMenuPrimitive.Item;
    ref={ref}'
    className={cn('
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50','
      inset && 'pl-8','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;''
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref};''
    className={cn(;;
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',;'
      className,;''
    )};
    {...(checked !== undefined && { checked })};
    {...props};''
  >;;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;";";";""
      <DropdownMenuPrimitive.ItemIndicator>;";";";";""
        <Check className="h-4 w-4" />;"
=======
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>'
>(({ className, children, checked, ...props }, ref) => ('
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}'
    className={cn('
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50','
      className,'
    )}'
    {...(checked !== undefined && { checked })};
    {...props}'
  >'
    <span className=absolute left-2 flex h-3.5 w-3.5 items-center justify-center>"
      <DropdownMenuPrimitive.ItemIndicator>;"
        <Check className=h-4 w-4 />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children};
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;""
>(({ className, children, ...props }, ref) => (;";""
  <DropdownMenuPrimitive.RadioItem;";";""
    ref={ref};";";";""
    className={cn(;";";";";""
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',;''
      className,;
    )};
    {...props};''
  >;;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;";";";""
      <DropdownMenuPrimitive.ItemIndicator>;";";";";""
        <Circle className="h-2 w-2 fill-current" />;"
=======
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>"
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;"
    ref={ref}"
    className={cn(;
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50','
      className,'
    )};
    {...props}'
  >'
    <span className=absolute left-2 flex h-3.5 w-3.5 items-center justify-center">"
      <DropdownMenuPrimitive.ItemIndicator>;
        <Circle className=h-2 w-2 fill-current" />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children};
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;
<<<<<<< HEAD
  };""
>(({ className, inset, ...props }, ref) => (;";""
  <DropdownMenuPrimitive.Label;";";""
    ref={ref};";";";""
    className={cn(;";";";";""
      'px-2 py-1.5 text-sm font-semibold',;;'
      inset && 'pl-8',;'
      className,;
    )};
=======

>(({ className, inset, ...props }, ref) => (;"
  <DropdownMenuPrimitive.Label;"
    ref={ref}"
    className={cn(;"
      'px-2 py-1.5 text-sm font-semibold','
      inset && 'pl-8','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
<<<<<<< HEAD

const DropdownMenuSeparator: unknown = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;''
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.Separator;''
    ref={ref};;
    className={cn('-mx-1 my-1 h-px bg-muted', className)};'
=======

const DropdownMenuSeparator = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,'
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>'
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.Separator'
    ref={ref}'
    className={cn('-mx-1 my-1 h-px bg-muted', className)}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
<<<<<<< HEAD

const DropdownMenuShortcut: unknown = ({;
  className,;''
  ...props;
}: React.HTMLAttributes<HTMLSpanElement>) => {;
  return (;''
    <span;;
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)};''
      {...props};
    />;
  );''
};;
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut;'

=======

const DropdownMenuShortcut = ({;
  className,'
  ...props'
}: React.HTMLAttributes<HTMLSpanElement>) => {;
  return ('
    <span'
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}'
      {...props}'
    />;
  )'
}'
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export {;
  DropdownMenu,;
  DropdownMenuTrigger,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuCheckboxItem,;
  DropdownMenuRadioItem,;
  DropdownMenuLabel,;
  DropdownMenuSeparator,;
  DropdownMenuShortcut,;
  DropdownMenuGroup,;
  DropdownMenuPortal,;
  DropdownMenuSub,;
<<<<<<< HEAD
  DropdownMenuSubContent,;''
  DropdownMenuSubTrigger,;
  DropdownMenuRadioGroup,;
};''
''''''
=======
  DropdownMenuSubContent,'
  DropdownMenuSubTrigger,'
  DropdownMenuRadioGroup,;
}'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
