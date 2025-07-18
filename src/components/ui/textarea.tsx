<<<<<<< HEAD
import React from 'react';;
import * as React from 'react;'
;;
import { cn } from '@/lib/utils;'
;;
export type TextareaProps = React.ComponentProps<'textarea'>;'
;;
const Textarea: unknown "unknown = React.forwardRef<HTMLTextAreaElement", TextareaProps>(;""
  ({ className, ...props }, ref) => {;";""
    return (;";";""
      <textarea;";";";""
        className={cn(;;
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',;'
          className,;
        )};
        ref={ref};
        {...props};''
      />;
    );
  },;''
);;
Textarea.displayName = 'Textarea;'

export { Textarea };''
''''''
=======
import React from 'react'
import * as React from 'react'

import { cn } from '@/lib/utils'

export type TextareaProps = React.ComponentProps<'textarea'>'
'
const Textarea: React.forwardRef<HTMLTextAreaElement", TextareaProps>(
  ({ className, ...props }, ref) => {;"
    return (;"
      <textarea"
        className={cn("
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50','
          className,)};
        ref={ref};
        {...props}'
      />'
    );
  },'
)'
Textarea.displayName = 'Textarea'

export { Textarea }'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
