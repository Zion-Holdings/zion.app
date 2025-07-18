<<<<<<< HEAD
import React from 'react';;
import * as React from 'react';;
import { ChevronDown } from '@/components/ui/icons;'
;;
import { cn } from '@/lib/utils;;
import type { SafeRef } from '@/types/ref-types;'

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;''
  showChevron?: boolean;
};
;;
const SidebarGroup: unknown "unknown = React.forwardRef<HTMLDivElement", SidebarGroupProps>(;"
=======
import React from 'react'
import * as React from 'react''
import { ChevronDown } from '@/components/ui/icons'

import { cn } from '@/lib/utils'
import type { SafeRef } from '@/types/ref-types'

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean'
  showChevron?: boolean'
};
'
const SidebarGroup: React.forwardRef<HTMLDivElement", SidebarGroupProps>(
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  (;
    {;
      title,;
      icon,;
      defaultExpanded = true,;
      showChevron = true,;
      className,;
      children,;
      ...props;
    },;
<<<<<<< HEAD
    ref,;
  ) => {;
    const [expanded, setExpanded] = React.useState(defaultExpanded);""
;";""
    return (;";";""
      <div;";";";""
        ref={ref as SafeRef<HTMLDivElement>};;
        className={cn('px-3 py-2', className)};''
        {...props};
      >;
        {title && (;''
          <button;;
            type="button";";";";";""
            className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30";";";""
            onClick={() => setExpanded(!expanded)};";";";""
          >;";";";";""
            <div className="flex items-center gap-2">;"
              {icon};
              <span>{title}</span>;""
            </div>;";""
            {showChevron && (;";";""
              <ChevronDown;";";";""
                className={cn(;";";";";""
                  'h-4 w-4 transition-transform',;;'
                  expanded ? 'rotate-0' : '-rotate-90',;'
                )};''
              />;
            )};
          </button>;''
        )};;
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>;'
      </div>;''
    );
  },;
);''
;;
SidebarGroup.displayName = 'SidebarGroup;;
export { SidebarGroup };''
''''''
=======
    ref,) => {;
    const [expanded, setExpanded] = React.useState(defaultExpanded)
;""
    return (;
      <div
        ref={ref as SafeRef<HTMLDivElement>}"
        className={cn('px-3 py-2', className)}'
        {...props}'
      >;
        {title && ('
          <button'
            type="button"
            className=flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30"
            onClick={() => setExpanded(!expanded)}"
          >;
            <div className=flex items-center gap-2">"
              {icon};
              <span>{title}</span>
            </div>;"
            {showChevron && (;"
              <ChevronDown"
                className={cn(;"
                  'h-4 w-4 transition-transform','
                  expanded ? 'rotate-0' : '-rotate-90','
                )}'
              />'
            )};
          </button>'
        )}'
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>'
      </div>'
    )'
  },;
)'
'
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
