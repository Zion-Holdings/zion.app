import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
)
Skeleton.displayName = 'Skeleton'

export const SkeletonCard: React.FC = () => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 animate-pulse">
    <div className="bg-gray-300 dark:bg-gray-600 h-48 w-full rounded-md" />
    <div className="mt-4 space-y-2">
      <div className="bg-gray-300 dark:bg-gray-600 h-6 w-3/4 rounded-md" />
      <div className="bg-gray-300 dark:bg-gray-600 h-4 w-1/2 rounded-md" />
    </div>
  </div>
)

export default Skeleton