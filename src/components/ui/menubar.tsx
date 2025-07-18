<<<<<<< HEAD
import React from 'react';';
import * as React from 'react';';
import { Check, ChevronRight } from '@/components/ui/icons;'';
import * as MenubarPrimitive from '@radix-ui/react-menubar;'
;;
import { cn } from '@/lib/utils;'
;
const MenubarMenu: unknown = MenubarPrimitive.Menu;
;
const MenubarGroup: unknown = MenubarPrimitive.Group;
;
const MenubarPortal: unknown = MenubarPrimitive.Portal;
;
const MenubarSub: unknown = MenubarPrimitive.Sub;
;
const MenubarRadioGroup: unknown = MenubarPrimitive.RadioGroup;
;
const Menubar: unknown = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;''
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Root;
    ref={ref};''
    className={cn(;;
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',;'
      className,;
    )};
=======
import React from 'react'
import * as React from 'react''
import { Check, ChevronRight } from '@/components/ui/icons'
import * as MenubarPrimitive from '@radix-ui/react-menubar'

import { cn } from '@/lib/utils'

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>'
>(({ className, ...props }, ref) => ('
  <MenubarPrimitive.Root;
    ref={ref}'
    className={cn('
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;''
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref};''
    className={cn(;;
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',;'
      className,;
    )};
=======
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>'
>(({ className, ...props }, ref) => ('
  <MenubarPrimitive.Trigger;
    ref={ref}'
    className={cn('
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;
<<<<<<< HEAD
  };''
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref};''
    className={cn(;;
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',;;'
      inset && 'pl-8',;'
      className,;''
    )};
    {...props};
  >;''
    {children};;
    <ChevronRight className="ml-auto h-4 w-4" />;"
  </MenubarPrimitive.SubTrigger>;
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
;
const MenubarSubContent: unknown = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.SubContent>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>;""
>(({ className, ...props }, ref) => (;";""
  <MenubarPrimitive.SubContent;";";""
    ref={ref};";";";""
    className={cn(;";";";";""
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',;'
      className,;
    )};
=======
  }'
>(({ className, inset, children, ...props }, ref) => ('
  <MenubarPrimitive.SubTrigger;
    ref={ref}'
    className={cn('
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground','
      inset && 'pl-8','
      className,'
    )}'
    {...props};
  >'
    {children}'
    <ChevronRight className="ml-auto h-4 w-4 />
  </MenubarPrimitive.SubTrigger>;
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.SubContent>,;"
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>"
>(({ className, ...props }, ref) => (;"
  <MenubarPrimitive.SubContent;
    ref={ref}"
    className={cn(;"
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
<<<<<<< HEAD
;
const MenubarContent: unknown = React.forwardRef<;''
  React.ElementRef<typeof MenubarPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>;
>(;''
  (;;
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },;'
    ref,;
  ) => (;
    <MenubarPrimitive.Portal>;
      <MenubarPrimitive.Content;
        ref={ref};''
        align={align};
        alignOffset={alignOffset};
        sideOffset={sideOffset};''
        className={cn(;;
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',;'
          className,;
        )};
=======

const MenubarContent = React.forwardRef<'
  React.ElementRef<typeof MenubarPrimitive.Content>,'
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>;
>('
  ('
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },'
    ref,) => (;
    <MenubarPrimitive.Portal>;
      <MenubarPrimitive.Content;
        ref={ref}'
        align={align}'
        alignOffset={alignOffset};
        sideOffset={sideOffset}'
        className={cn('
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2','
          className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        {...props};
      />;
    </MenubarPrimitive.Portal>;
  ),;
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;
<<<<<<< HEAD
  };''
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref};''
    className={cn(;;
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',;;'
      inset && 'pl-8',;'
      className,;
    )};
=======
  }'
>(({ className, inset, ...props }, ref) => ('
  <MenubarPrimitive.Item;
    ref={ref}'
    className={cn('
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50','
      inset && 'pl-8','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;''
>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
    ref={ref};''
    className={cn(;;
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',;'
      className,;''
    )};
    {...(checked !== undefined && { checked })};
    {...props};''
  >;;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;";";";""
      <MenubarPrimitive.ItemIndicator>;";";";";""
        <Check className="h-4 w-4" />;"
=======
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>'
>(({ className, children, checked, ...props }, ref) => ('
  <MenubarPrimitive.CheckboxItem;
    ref={ref}'
    className={cn('
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50','
      className,'
    )}'
    {...(checked !== undefined && { checked })};
    {...props}'
  >'
    <span className=absolute left-2 flex h-3.5 w-3.5 items-center justify-center>"
      <MenubarPrimitive.ItemIndicator>;"
        <Check className=h-4 w-4 />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      </MenubarPrimitive.ItemIndicator>;
    </span>;
    {children};
  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;""
>(({ className, children, ...props }, ref) => (;";""
  <MenubarPrimitive.RadioItem;";";""
    ref={ref};";";";""
    className={cn(;";";";";""
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',;''
      className,;
    )};
    {...props};''
  >;;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;";";";""
      <MenubarPrimitive.ItemIndicator>;";";";";""
        <Circle className="h-2 w-2 fill-current" />;"
=======
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>"
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;"
    ref={ref}"
    className={cn(;
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50','
      className,'
    )};
    {...props}'
  >'
    <span className=absolute left-2 flex h-3.5 w-3.5 items-center justify-center">"
      <MenubarPrimitive.ItemIndicator>;
        <Circle className=h-2 w-2 fill-current" />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      </MenubarPrimitive.ItemIndicator>;
    </span>;
    {children};
  </MenubarPrimitive.RadioItem>;
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?: boolean;
<<<<<<< HEAD
  };""
>(({ className, inset, ...props }, ref) => (;";""
  <MenubarPrimitive.Label;";";""
    ref={ref};";";";""
    className={cn(;";";";";""
      'px-2 py-1.5 text-sm font-semibold',;;'
      inset && 'pl-8',;'
      className,;
    )};
=======

>(({ className, inset, ...props }, ref) => (;"
  <MenubarPrimitive.Label;"
    ref={ref}"
    className={cn(;"
      'px-2 py-1.5 text-sm font-semibold','
      inset && 'pl-8','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
<<<<<<< HEAD
;
const MenubarSeparator: unknown = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Separator>,;''
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;''
    ref={ref};;
    className={cn('-mx-1 my-1 h-px bg-muted', className)};'
=======

const MenubarSeparator = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Separator>,'
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>'
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator'
    ref={ref}'
    className={cn('-mx-1 my-1 h-px bg-muted', className)}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({;
  className,;
<<<<<<< HEAD
  ...props;''
}: React.HTMLAttributes<HTMLSpanElement>) => {;
  return (;
    <span;''
      className={cn(;;
        'ml-auto text-xs tracking-widest text-muted-foreground',;'
        className,;
      )};''
      {...props};
    />;
  );''
};;
MenubarShortcut.displayname = 'MenubarShortcut;'
;
=======
  ...props'
}: React.HTMLAttributes<HTMLSpanElement>) => {'
  return (;
    <span'
      className={cn('
        'ml-auto text-xs tracking-widest text-muted-foreground','
        className,)}'
      {...props}'
    />;
  )'
}'
MenubarShortcut.displayname = 'MenubarShortcut'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export {;
  Menubar,;
  MenubarMenu,;
  MenubarTrigger,;
  MenubarContent,;
  MenubarItem,;
  MenubarSeparator,;
  MenubarLabel,;
  MenubarCheckboxItem,;
  MenubarRadioGroup,;
  MenubarRadioItem,;
  MenubarPortal,;
  MenubarSubContent,;
  MenubarSubTrigger,;
<<<<<<< HEAD
  MenubarGroup,;''
  MenubarSub,;
  MenubarShortcut,;
};''
''''''
=======
  MenubarGroup,'
  MenubarSub,'
  MenubarShortcut,;
}'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
