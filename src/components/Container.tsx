import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

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
}
}'
}'