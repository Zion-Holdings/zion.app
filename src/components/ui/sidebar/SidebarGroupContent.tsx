import React from 'react';';
import { cn } from '@/lib/utils;'
;
interface SidebarGroupContentProps;
  extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
};
;
export function SidebarGroupContent(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  className,;''
  children,;
  ...props;
}: SidebarGroupContentProps) {;''
  return (;;
    <div className={cn('space-y-1', className)} {...props}>;'
      {children};''
    </div>;
  );
};
;
};''
}
}''
}''