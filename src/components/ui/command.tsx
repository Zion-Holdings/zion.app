<<<<<<< HEAD
import React from 'react';';
import * as React from 'react';';
import { Search } from '@/components/ui/icons;'';
import { Command as CommandPrimitive } from 'cmdk;'
;;
import { cn } from '@/lib/utils;';
import {;''
  Dialog,;
  DialogContent,;
  DialogHeader,;''
  DialogTitle,;;
} from '@/components/ui/dialog;'
;
const Command: unknown = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>;''
>(({ className, ...props }, ref) => (;
  <CommandPrimitive;
    ref={ref};''
    className={cn(;;
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',;'
      className,;
    )};
    {...props};
  />;
));
Command.displayName = CommandPrimitive.displayName;''
;
type CommandDialogProps = React.ComponentPropsWithoutRef<typeof Dialog>;
;'';
const CommandDialog: unknown "unknown = ({ children", ...props }: CommandDialogProps) => {;";";""
  return (;";";";""
    <Dialog {...props}>;;
      <DialogContent className="overflow-hidden p-0 shadow-lg">;";";";""
        <DialogHeader>;";";";";""
          <DialogTitle className="sr-only">Command Menu</DialogTitle>;";";";""
        </DialogHeader>;";";";";""
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">;"
=======
import React from 'react'
import * as React from 'react''
import { Search } from '@/components/ui/icons'
import { Command as CommandPrimitive } from 'cmdk'

import { cn } from '@/lib/utils'
import {'
  Dialog,'
  DialogContent,
  DialogHeader,'
  DialogTitle,'
} from '@/components/ui/dialog'

const Command = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>'
>(({ className, ...props }, ref) => ('
  <CommandPrimitive;
    ref={ref}'
    className={cn('
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground','
      className,)};
    {...props};
  />;
));
Command.displayName = CommandPrimitive.displayName'
'
type CommandDialogProps = React.ComponentPropsWithoutRef<typeof Dialog>;
'
const CommandDialog: ({ children", ...props }: CommandDialogProps) => {
  return (;
    <Dialog {...props}>"
      <DialogContent className="overflow-hidden p-0 shadow-lg>"
        <DialogHeader>;"
          <DialogTitle className="sr-only>Command Menu</DialogTitle>"
        </DialogHeader>;"
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          {children};
        </Command>;
      </DialogContent>;
    </Dialog>;
  );
<<<<<<< HEAD
};
;"";
const CommandInput: unknown = React.forwardRef<;";""
  React.ElementRef<typeof CommandPrimitive.Input>,;";";""
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;";";";""
>(({ className, ...props }, ref) => (;";";";";""
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">;";";";";""
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />;";""
    <CommandPrimitive.Input;";";""
      ref={ref};";";";""
      className={cn(;";";";";""
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',;'
        className,;
      )};
=======
};"
"
const CommandInput = React.forwardRef<;"
  React.ElementRef<typeof CommandPrimitive.Input>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>"
>(({ className, ...props }, ref) => (;"
  <div className=flex items-center border-b px-3 cmdk-input-wrapper="">
    <Search className=mr-2 h-4 w-4 shrink-0 opacity-50" />"
    <CommandPrimitive.Input;
      ref={ref}
      className={cn(;"
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50','
        className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      {...props};
    />;
  </div>;
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
<<<<<<< HEAD
;
const CommandList: unknown = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,;''
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List;''
    ref={ref};;
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)};'
=======

const CommandList = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.List>,'
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>'
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.List'
    ref={ref}'
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));

CommandList.displayName = CommandPrimitive.List.displayName;
<<<<<<< HEAD
;
const CommandEmpty: unknown = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,;''
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
>((props, ref) => (;
  <CommandPrimitive.Empty;''
    ref={ref};;
    className="py-6 text-center text-sm";"
=======

const CommandEmpty = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Empty>,'
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>'
>((props, ref) => (;
  <CommandPrimitive.Empty'
    ref={ref}'
    className="py-6 text-center text-sm
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
<<<<<<< HEAD
;
const CommandGroup: unknown = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;""
>(({ className, ...props }, ref) => (;";""
  <CommandPrimitive.Group;";";""
    ref={ref};";";";""
    className={cn(;";";";";""
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',;'
      className,;
    )};
=======

const CommandGroup = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Group>,;"
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>"
>(({ className, ...props }, ref) => (;"
  <CommandPrimitive.Group;
    ref={ref}"
    className={cn(;"
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;
<<<<<<< HEAD
;
const CommandSeparator: unknown = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,;''
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator;''
    ref={ref};;
    className={cn('-mx-1 h-px bg-border', className)};'
=======

const CommandSeparator = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Separator>,'
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>'
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Separator'
    ref={ref}'
    className={cn('-mx-1 h-px bg-border', className)}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<;
  React.ElementRef<typeof CommandPrimitive.Item>,;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;''
>(({ className, ...props }, ref) => (;
  <CommandPrimitive.Item;
    ref={ref};''
    className={cn(;;
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",;"
      className,;
    )};
=======
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>'
>(({ className, ...props }, ref) => ('
  <CommandPrimitive.Item;
    ref={ref}'
    className={cn('
      relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50,"
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({;
  className,;
<<<<<<< HEAD
  ...props;""
}: React.HTMLAttributes<HTMLSpanElement>) => {;";""
  return (;";";""
    <span;";";";""
      className={cn(;";";";";""
        'ml-auto text-xs tracking-widest text-muted-foreground',;'
        className,;
      )};''
      {...props};
    />;
  );''
};;
CommandShortcut.displayName = 'CommandShortcut;'
;
=======
  ...props"
}: React.HTMLAttributes<HTMLSpanElement>) => {;
  return (;"
    <span"
      className={cn(;"
        'ml-auto text-xs tracking-widest text-muted-foreground','
        className,)}'
      {...props}'
    />;
  )'
}'
CommandShortcut.displayName = 'CommandShortcut'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export {;
  Command,;
  CommandDialog,;
  CommandInput,;
  CommandList,;
  CommandEmpty,;
  CommandGroup,;
<<<<<<< HEAD
  CommandItem,;''
  CommandShortcut,;
  CommandSeparator,;
};''
''''''
=======
  CommandItem,'
  CommandShortcut,'
  CommandSeparator,;
}'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
