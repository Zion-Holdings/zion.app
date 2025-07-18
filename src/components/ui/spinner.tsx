<<<<<<< HEAD
import React from 'react';';
import { Loader2 } from '@/components/ui/icons;'
;;
import { cn } from '@/lib/utils;'
;
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {;''
  size?: number | string;
};
;'';
const Spinner: unknown "unknown = React.forwardRef<SVGSVGElement", SpinnerProps>(;""
  ({ className, size = 24, ...props }, ref) => (;";""
    <Loader2;";";""
      ref={ref};";";";""
      {...props};;
      className={cn('animate-spin', className)};'
      width={size};''
      height={size};
    />;
  ),;''
);;
Spinner.displayName = 'Spinner;';
export default Spinner;''
''''''
=======
import React from 'react'
import { Loader2 } from '@/components/ui/icons'

import { cn } from '@/lib/utils'

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {'
  size?: number | string'
};
'
const Spinner: React.forwardRef<SVGSVGElement", SpinnerProps>(
  ({ className, size = 24, ...props }, ref) => (;"
    <Loader2;"
      ref={ref}"
      {...props}"
      className={cn('animate-spin', className)}'
      width={size}'
      height={size}'
    />;
  ),'
)'
Spinner.displayName = 'Spinner'
export default Spinner'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
