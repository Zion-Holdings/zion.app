<<<<<<< HEAD
import React from 'react';';
import { cn } from '@/lib/utils;'
;
=======
import React from 'react'
import { cn } from '@/lib/utils'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

export function SidebarSection(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  className,;
<<<<<<< HEAD
  title,;''
  children,;
  ...props;
}: SidebarSectionProps) {;''
  return (;;
    <div className={cn('py-2', className)} {...props}>;''
      {title && (;;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;";""
          {title};";";""
        </h3>;";";";""
      )};";";";";""
      <div className="space-y-1">{children}</div>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
  title,'
  children,'
  ...props;
}: SidebarSectionProps) {'
  return ('
    <div className={cn('py-2', className)} {...props}>'
      {title && ('
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider>"
          {title};"
        </h3>"
      )};
      <div className=space-y-1">{children}</div>"
    </div>;
  );"
}"

}""
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
