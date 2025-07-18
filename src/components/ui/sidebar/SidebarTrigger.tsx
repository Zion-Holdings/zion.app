<<<<<<< HEAD
import React from 'react';';
import { Menu, X } from '@/components/ui/icons;'';
import { Button } from '@/components/ui/button;'
;;
import { useSidebar } from './sidebar-context;'';
import { cn } from '@/lib/utils;'
;
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;
};
;
export function SidebarTrigger(): unknown {): unknown {): unknown {): unknown {): unknown {{ className, ...props }: SidebarTriggerProps) {;''
  const { open, toggleSidebar } = useSidebar();
;
  return (;''
    <Button;;
      variant="ghost";";";";";""
      size="icon";";";";";""
      className={cn('', className)};'
      onClick={toggleSidebar};
      {...props};''
    >;;
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />};";";";";""
      <span className="sr-only">Toggle Sidebar</span>;""
    </Button>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import React from 'react'
import { Menu, X } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'

import { useSidebar } from './sidebar-context'
import { cn } from '@/lib/utils'

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;
};

export function SidebarTrigger(): unknown {): unknown {): unknown {): unknown {): unknown {{ className, ...props }: SidebarTriggerProps) {'
  const { open, toggleSidebar } = useSidebar()'

  return ('
    <Button'
      variant="ghost"
      size=icon"
      className={cn('', className)}'
      onClick={toggleSidebar};
      {...props}'
    >'
      {open ? <X className="h-4 w-4 /> : <Menu className=h-4 w-4" />}"
      <span className=sr-only>Toggle Sidebar</span>"
    </Button>;"
  );
}"
"

}"
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
