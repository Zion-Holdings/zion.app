// src/components/ui/skeleton.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A basic skeleton loader component.
 *
 * This mirrors the API of the `Skeleton` component from shadcn/ui so that
 * other components in the codebase can customize the size via the
 * `className` prop.
 */
const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
)
Skeleton.displayName = "Skeleton"

export default Skeleton
