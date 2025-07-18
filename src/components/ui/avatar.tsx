<<<<<<< HEAD
import React from 'react';;
import * as React from 'react';;
import * as AvatarPrimitive from '@radix-ui/react-avatar;'
;;
import { cn } from '@/lib/utils;'

const Avatar: unknown = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;''
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Root;
    ref={ref};''
    className={cn(;;
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',;'
      className,;
    )};
=======
import React from 'react'
import * as React from 'react''
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'

const Avatar = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>'
>(({ className, ...props }, ref) => ('
  <AvatarPrimitive.Root;
    ref={ref}'
    className={cn('
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full','
      className,)};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
<<<<<<< HEAD

const AvatarImage: unknown = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Image>,;''
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Image;''
    ref={ref};;
    className={cn('aspect-square h-full w-full', className)};'
=======

const AvatarImage = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Image>,'
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>'
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Image'
    ref={ref}'
    className={cn('aspect-square h-full w-full', className)}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    {...props};
  />;
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<;
  React.ElementRef<typeof AvatarPrimitive.Fallback>,;
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;''
>(({ className, ...props }, ref) => (;
  <AvatarPrimitive.Fallback;
    ref={ref};''
    className={cn(;;
      'flex h-full w-full items-center justify-center rounded-full bg-muted',;'
      className,;
    )};
    {...props};
  />;
));''
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };''
''''''
=======
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>'
>(({ className, ...props }, ref) => ('
  <AvatarPrimitive.Fallback;
    ref={ref}'
    className={cn('
      'flex h-full w-full items-center justify-center rounded-full bg-muted','
      className,)};
    {...props};
  />;
))'
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName'

export { Avatar, AvatarImage, AvatarFallback }'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
