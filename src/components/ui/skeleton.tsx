// src/components/ui/skeleton.tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // This interface extends HTMLDivElement attributes for skeleton components
  // Additional skeleton-specific props can be added here in the future
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    // Base classes for shimmer effect
    const shimmerBaseClass = "relative overflow-hidden rounded-md";
    // Shimmer animation classes
    const shimmerAnimationClass =
      "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 dark:before:via-black/60 before:to-transparent";

    return (
      <div
        ref={ref}
        className={cn(
          shimmerBaseClass,
          "bg-muted", // Base background color
          shimmerAnimationClass,
          className
        )}
        {...props}
      />
    );
  },
);
Skeleton.displayName = "Skeleton";

export const SkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue p-4">
      {/* Image Placeholder */}
      <Skeleton className="h-48 w-full" />

      <div className="flex flex-col pt-4 flex-grow">
        {/* Category Badge Placeholder */}
        <Skeleton className="h-5 w-1/4 mb-2" />

        {/* Title Placeholder */}
        <Skeleton className="h-6 w-3/4 mb-2" />

        {/* Description Placeholder */}
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mb-4" />

        {/* Tags Placeholder (Optional - simplified as a single bar) */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-5 w-1/5" />
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/6" />
        </div>

        {/* Author Placeholder */}
        <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
          <Skeleton className="h-8 w-8 rounded-full mr-2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;

// Add Keyframes for shimmer animation (e.g. in a global CSS or a style tag if no global CSS file is specified)
// For this example, I'll assume these keyframes are added to a global CSS file or a style tag in the main HTML.
// If not, this needs to be injected. For now, the keyframes are defined in tailwind.config.js or a global CSS.

/*
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

// Ensure your tailwind.config.js includes this animation:
// theme: {
//   extend: {
//     animation: {
//       shimmer: 'shimmer 2s infinite',
//     },
//     keyframes: {
//       shimmer: {
//         '0%': { transform: 'translateX(-100%)' },
//         '100%': { transform: 'translateX(100%)' },
//       },
//     },
//   },
// },
*/
