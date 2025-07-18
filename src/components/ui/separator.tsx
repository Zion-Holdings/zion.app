

import * as SeparatorPrimitive from '@radix-ui/react-separator;'';
import { cn } from '@/lib/utils;'';
const Separator: unknown = React.forwardRef<;''';
>(;''';
    { className, orientation = 'horizontal', decorative = true, ...props },;'';
    <SeparatorPrimitive.Root;''';
      orientation={orientation};''';
        'shrink-0 bg-border',;;'';
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',;'';
);''';
export { Separator };''';
''''''';
