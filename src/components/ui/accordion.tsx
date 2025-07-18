<<<<<<< HEAD
import React from 'react';';
import * as React from 'react';';
import { ChevronDown } from '@/components/ui/icons;'';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';';
import * as AccordionPrimitive from '@radix-ui/react-accordion;'
;;
import { cn } from '@/lib/utils;'
;
const Accordion: unknown = AccordionPrimitive.Root;
;
const AccordionItem: unknown = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Item>,;''
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <AccordionPrimitive.Item;''
    ref={ref};;
    className={cn('border-b', className)};'
    {...props};
  />;''
));;
AccordionItem.displayName = 'AccordionItem;'
;'';
const AccordionTrigger: unknown = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Trigger>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;''
>(({ className, children, ...props }, ref) => (;;
  <AccordionPrimitive.Header className="flex">;";""
    <AccordionPrimitive.Trigger;";";""
      ref={ref};";";";""
      className={cn(;";";";";""
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',;'
        className,;''
      )};
      {...props};
    >;''
      {children};;
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />;"
=======
import React from 'react'
import * as React from 'react''
import { ChevronDown } from '@/components/ui/icons'
import type { ElementRef, ComponentPropsWithoutRef } from 'react''
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Item>,'
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>'
>(({ className, ...props }, ref) => (;
  <AccordionPrimitive.Item'
    ref={ref}'
    className={cn('border-b', className)}'
    {...props};
  />'
))'
AccordionItem.displayName = 'AccordionItem'
'
const AccordionTrigger = React.forwardRef<'
  ElementRef<typeof AccordionPrimitive.Trigger>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>'
>(({ className, children, ...props }, ref) => ('
  <AccordionPrimitive.Header className="flex>"
    <AccordionPrimitive.Trigger;"
      ref={ref}"
      className={cn(;
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180','
        className,'
      )}'
      {...props};
    >'
      {children}'
      <ChevronDown className=h-4 w-4 shrink-0 transition-transform duration-200" />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    </AccordionPrimitive.Trigger>;
  </AccordionPrimitive.Header>;
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
<<<<<<< HEAD
;
const AccordionContent: unknown = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Content>,;""
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;";""
>(({ className, children, ...props }, ref) => (;";";""
  <AccordionPrimitive.Content;";";";""
    ref={ref};";";";";""
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down";";";""
    {...props};";";";""
  >;";";";";""
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;'
  </AccordionPrimitive.Content>;
));
;''
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };''
''''''
=======

const AccordionContent = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;"
>(({ className, children, ...props }, ref) => (;"
  <AccordionPrimitive.Content
    ref={ref};
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}"
  >;"
    <div className={cn('pb-4 pt-0', className)}>{children}</div>'
  </AccordionPrimitive.Content>;
));
'
AccordionContent.displayName = AccordionPrimitive.Content.displayName'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
