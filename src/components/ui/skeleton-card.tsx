// src/components/ui/skeleton-card.tsx
import * as React from "react"

/**
 * Skeleton placeholder for card-like content.
 * This was previously exported as the default `Skeleton` component.
 */
const SkeletonCard: React.FC = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-600 h-48 w-full rounded-md" />
      <div className="mt-4 space-y-2">
        <div className="bg-gray-300 dark:bg-gray-600 h-6 w-3/4 rounded-md" />
        <div className="bg-gray-300 dark:bg-gray-600 h-4 w-1/2 rounded-md" />
      </div>
    </div>
  )
}

export default SkeletonCard
