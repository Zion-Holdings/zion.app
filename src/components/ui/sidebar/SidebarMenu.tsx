<<<<<<< HEAD
import React from 'react';;
import { cn } from '@/lib/utils;'

=======
import React from 'react'
import { cn } from '@/lib/utils'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {;
  className?: string;
  children?: React.ReactNode;
};

export function SidebarMenu(): unknown {): unknown {): unknown {): unknown {): unknown {{;
<<<<<<< HEAD
  className,;''
  children,;
  ...props;
}: SidebarMenuProps) {;''
  return (;;
    <ul className={cn('space-y-1', className)} {...props}>;'
      {children};''
    </ul>;
  );
};

};''

}''
}''
=======
  className,'
  children,'
  ...props;
}: SidebarMenuProps) {'
  return ('
    <ul className={cn('space-y-1', className)} {...props}>'
      {children}'
    </ul>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
