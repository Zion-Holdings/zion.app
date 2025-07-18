<<<<<<< HEAD
import React from 'react';';
import { cn } from '@/lib/utils;'
;
=======
import React from 'react'
import { cn } from '@/lib/utils'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
};

export function SidebarContent(): unknown {): unknown {): unknown {): unknown {): unknown {{;
<<<<<<< HEAD
  className,;''
  children,;
  ...props;
}: SidebarContentProps) {;''
  return (;;
    <div className={cn('flex-1 px-2 py-4', className)} {...props}>;'
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
  className,'
  children,'
  ...props;
}: SidebarContentProps) {'
  return ('
    <div className={cn('flex-1 px-2 py-4', className)} {...props}>'
      {children}'
    </div>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
