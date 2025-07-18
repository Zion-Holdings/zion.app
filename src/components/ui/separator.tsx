<<<<<<< HEAD
import React from 'react';;
import * as React from 'react';;
import * as SeparatorPrimitive from '@radix-ui/react-separator;'
;;
import { cn } from '@/lib/utils;'

const Separator: unknown = React.forwardRef<;''
  React.ElementRef<typeof SeparatorPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;
>(;''
  (;;
    { className, orientation = 'horizontal', decorative = true, ...props },;'
    ref,;
  ) => (;
    <SeparatorPrimitive.Root;''
      ref={ref};
      decorative={decorative};
      orientation={orientation};''
      className={cn(;;
        'shrink-0 bg-border',;;'
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',;'
        className,;
      )};
      {...props};
    />;
  ),;
);''
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };''
''''''
=======
import React from 'react'
import * as React from 'react''
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

const Separator = React.forwardRef<'
  React.ElementRef<typeof SeparatorPrimitive.Root>,'
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;
>('
  ('
    { className, orientation = 'horizontal', decorative = true, ...props },'
    ref,) => (;
    <SeparatorPrimitive.Root'
      ref={ref}'
      decorative={decorative};
      orientation={orientation}'
      className={cn('
        'shrink-0 bg-border','
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]','
        className,)};
      {...props};
    />;
  ),;
)'
Separator.displayName = SeparatorPrimitive.Root.displayName'

export { Separator }'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
