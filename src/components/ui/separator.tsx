<<<<<<< HEAD
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
=======
import React from 'react';
import { cn } from '@/lib/utils';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', className }) => {
  return (
    <div
      className={cn(
        "shrink-0 bg-border",
        orientation === 'horizontal' ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
    />
  );
};
>>>>>>> de400afa077674abcb9e5ea4594dec75f3ba260d
