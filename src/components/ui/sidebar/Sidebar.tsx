<<<<<<< HEAD
import React from 'react';';
import { cn } from '@/lib/utils;'
;
=======
import React from 'react'
import { cn } from '@/lib/utils'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
};
<<<<<<< HEAD
;'';
export function Sidebar(): unknown {): unknown {): unknown {): unknown {): unknown {{ className, children, ...props }: SidebarProps) {;
  return (;
    <div;''
      className={cn(;;
        'flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200',;'
        className,;
      )};
      {...props};
    >;
      {children};''
    </div>;
  );
};
;
};''
}
}''
}''
=======
'
export function Sidebar(): unknown {): unknown {): unknown {): unknown {): unknown {{ className, children, ...props }: SidebarProps) {'
  return (;
    <div'
      className={cn('
        'flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200','
        className,)};
      {...props};
    >;
      {children}'
    </div>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
