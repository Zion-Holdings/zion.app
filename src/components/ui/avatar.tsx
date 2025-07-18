

import * as AvatarPrimitive from '@radix-ui/react-avatar;'';
import { cn } from '@/lib/utils;'';
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;''';
    ref={ref};''';
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',;'';

  React.ElementRef<typeof AvatarPrimitive.Image>,;''';
  <AvatarPrimitive.Image;''';
    className={cn('aspect-square h-full w-full', className)};'';
  React.ElementRef<typeof AvatarPrimitive.Image>,'';
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>'';
  <AvatarPrimitive.Image'';
    ref={ref}'';
    className={cn('aspect-square h-full w-full', className)}'';
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;''';
    ref={ref};''';
      'flex h-full w-full items-center justify-center rounded-full bg-muted',;'';
));''';
export { Avatar, AvatarImage, AvatarFallback };''';
''''''';
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>'';
>(({ className, ...props }, ref) => ('';
    ref={ref}'';
    className={cn('';
      'flex h-full w-full items-center justify-center rounded-full bg-muted','';
))'';
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName'';
export { Avatar, AvatarImage, AvatarFallback }'';
'''''''