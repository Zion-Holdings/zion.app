<<<<<<< HEAD
import React from 'react';;
import { cn } from '@/lib/utils;'

=======
import React from 'react'
import { cn } from '@/lib/utils'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
};

export function SidebarItem(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  className,;
  children,;
  active,;
<<<<<<< HEAD
  ...props;''
}: SidebarItemProps) {;
  return (;
    <div;''
      className={cn(;;
        'flex items-center px-3 py-2 text-sm font-medium rounded-md',;''
        active;;
          ? 'bg-primary/10 text-primary;''
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',;'
        className,;
      )};
      {...props};
    >;
      {children};''
    </div>;
  );
};

};''

}''
}''
=======
  ...props'
}: SidebarItemProps) {'
  return (;
    <div'
      className={cn('
        'flex items-center px-3 py-2 text-sm font-medium rounded-md','
        active'
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground','
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
