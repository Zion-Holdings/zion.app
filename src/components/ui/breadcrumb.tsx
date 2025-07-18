<<<<<<< HEAD
import React from 'react';;
import * as React from 'react';;
import { ChevronRight } from '@/components/ui/icons;;
import { Slot } from '@radix-ui/react-slot;'
;;
import { cn } from '@/lib/utils;'

const Breadcrumb: unknown = React.forwardRef<;''
  HTMLElement,;;
  React.ComponentPropsWithoutRef<'nav'> & {;'
    separator?: React.ReactNode;''
  };;
>(({ className, separator: "_separator", ...props }, ref) => (;";";""
  <nav;";";";""
    ref={ref};";";";";""
    aria-label="breadcrumb";";";";""
    className={cn(;";";";";""
      'inline-flex items-center gap-1 text-sm text-zion-slate-light',;'
      className,;''
    )};
    {...props};
  />;''
));;
Breadcrumb.displayName = 'Breadcrumb;'

const BreadcrumbList: unknown = React.forwardRef<;''
  HTMLOListElement,;;
  React.ComponentPropsWithoutRef<'ol'>;'
>(({ className, ...props }, ref) => (;
  <ol;''
    ref={ref};;
    className={cn('flex items-center gap-1.5', className)};'
    {...props};
  />;''
));;
BreadcrumbList.displayName = 'BreadcrumbList;'

const BreadcrumbItem: unknown = React.forwardRef<;''
  HTMLLIElement,;;
  React.ComponentPropsWithoutRef<'li'>;'
>(({ className, ...props }, ref) => (;
  <li;''
    ref={ref};;
    className={cn('inline-flex items-center gap-1.5', className)};'
    {...props};
  />;''
));;
BreadcrumbItem.displayName = 'BreadcrumbItem;'

const BreadcrumbLink: unknown = React.forwardRef<;''
  HTMLAnchorElement,;;
  React.ComponentPropsWithoutRef<'a'> & {;'
    asChild?: boolean;
  };''
>(({ className, asChild = false, ...props }, ref) => {;;
  const Comp: unknown = asChild ? Slot : 'a;''

  return (;
    <Comp;''
      ref={ref};;
      className={cn('transition-colors hover:text-zion-cyan', className)};''
      {...props};
    />;
  );''
});;
BreadcrumbLink.displayName = 'BreadcrumbLink;'
;;
const BreadcrumbSeparator: unknown = ({;
  children,;
  className,;''
  ...props;;
}: React.ComponentProps<'li'>) => (;''
  <li;;
    role="presentation";";";";";""
    aria-hidden="true";";";";";""
    className={cn('[&>svg]:size-3.5 text-zion-slate-light/70', className)};'
    {...props};''
  >;;
    {children || <ChevronRight className="h-4 w-4" />};";";""
  </li>;";";";""
);";";";";""
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator;''

const BreadcrumbEllipsis: unknown = ({;
  className,;''
  ...props;;
}: React.ComponentProps<'span'>) => (;''
  <span;;
    role="presentation";";";";";""
    aria-hidden="true";";";";";""
    className={cn('flex h-9 w-9 items-center justify-center', className)};'
    {...props};''
  >;
    &#8230;
  </span>;''
);;
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis;'

=======
import React from 'react'
import * as React from 'react''
import { ChevronRight } from '@/components/ui/icons'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

const Breadcrumb = React.forwardRef<'
  HTMLElement,'
  React.ComponentPropsWithoutRef<'nav'> & {'
    separator?: React.ReactNode'
  }'
>(({ className, separator: "_separator, ...props }, ref) => (
  <nav;"
    ref={ref}"
    aria-label=breadcrumb
    className={cn("
      'inline-flex items-center gap-1 text-sm text-zion-slate-light','
      className,'
    )}'
    {...props};
  />'
))'
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<'
  HTMLOListElement,'
  React.ComponentPropsWithoutRef<'ol'>'
>(({ className, ...props }, ref) => (;
  <ol'
    ref={ref}'
    className={cn('flex items-center gap-1.5', className)}'
    {...props};
  />'
))'
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<'
  HTMLLIElement,'
  React.ComponentPropsWithoutRef<'li'>'
>(({ className, ...props }, ref) => (;
  <li'
    ref={ref}'
    className={cn('inline-flex items-center gap-1.5', className)}'
    {...props};
  />'
))'
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<'
  HTMLAnchorElement,'
  React.ComponentPropsWithoutRef<'a'> & {'
    asChild?: boolean;
  }'
>(({ className, asChild = false, ...props }, ref) => {'
  const Comp = asChild ? Slot : 'a'
'
  return (;
    <Comp'
      ref={ref}'
      className={cn('transition-colors hover:text-zion-cyan', className)}'
      {...props}'
    />;
  )'
})'
BreadcrumbLink.displayName = 'BreadcrumbLink'
'
const BreadcrumbSeparator = ({'
  children,;
  className,'
  ...props'
}: React.ComponentProps<'li'>) => ('
  <li'
    role="presentation"
    aria-hidden=true"
    className={cn('[&>svg]:size-3.5 text-zion-slate-light/70', className)}'
    {...props}'
  >'
    {children || <ChevronRight className="h-4 w-4 />}"
  </li>;"
)"
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
'
const BreadcrumbEllipsis = ({;
  className,'
  ...props'
}: React.ComponentProps<'span'>) => ('
  <span'
    role=presentation
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}'
    {...props}'
  >'
    &#8230;
  </span>'
)'
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export {;
  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
<<<<<<< HEAD
  BreadcrumbLink,;''
  BreadcrumbSeparator,;
  BreadcrumbEllipsis,;
};''
''''''
=======
  BreadcrumbLink,'
  BreadcrumbSeparator,'
  BreadcrumbEllipsis,;
}'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
