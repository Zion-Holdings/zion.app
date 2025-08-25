import React from 'react'

interface SkeletonProps {
  className?: string
}

const Skeleton = ({ className = "" }: SkeletonProps) => (
  <div
    className={`animate-pulse rounded-md bg-zion-slate-100 dark:bg-zion-slate-800 ${className}`}
  />
)

export { Skeleton }