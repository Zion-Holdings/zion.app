// src/components/ui/skeleton.tsx
import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse rounded-md bg-zion-blue-light/20",
          className
        )}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

export const SkeletonCard: React.FC = () => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-300 dark:bg-gray-700', className)}
      {...props}
    />
  );
};

export default Skeleton;
