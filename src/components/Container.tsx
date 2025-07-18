<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils;
=======
import React from 'react'
import { cn } from '@/lib/utils'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

interface ContainerProps {
  children: React.ReactNode
  className?: string

<<<<<<< HEAD
/**;''
 * Provides a consistent max-width and horizontal padding for page sections.''
 */;
export function Container(): unknown {): unknown {): unknown {): unknown {): unknown {{ children, className }: ContainerProps) {;''
  return (;''
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}>''
      {children};''
    </div>''
  );
};

};''

}''
}''
=======
/**'
 * Provides a consistent max-width and horizontal padding for page sections.'
 */;
export function Container(): unknown {): unknown {): unknown {): unknown {): unknown {{ children, className }: ContainerProps) {'
  return ('
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}>'
      {children}'
    </div>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
