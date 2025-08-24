import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  animated?: boolean;
}

export function Skeleton({ 
  className, 
  width, 
  height, 
  rounded = 'md',
  animated = true 
}: SkeletonProps) {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <div
      className={cn(
        'bg-muted',
        roundedClasses[rounded],
        animated && 'animate-pulse',
        className
      )}
      style={{
        width: width,
        height: height,
      }}
    />
  );
}

interface CardSkeletonProps {
  className?: string;
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  showActions?: boolean;
  lines?: number;
}

export function CardSkeleton({
  className,
  showImage = true,
  showTitle = true,
  showDescription = true,
  showActions = true,
  lines = 2
}: CardSkeletonProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {showImage && (
        <Skeleton className="w-full h-48 rounded-lg" />
      )}
      
      <div className="space-y-3">
        {showTitle && (
          <Skeleton className="h-6 w-3/4" />
        )}
        
        {showDescription && (
          <div className="space-y-2">
            {Array.from({ length: lines }).map((_, i) => (
              <Skeleton 
                key={i} 
                className={cn(
                  "h-4",
                  i === lines - 1 ? "w-2/3" : "w-full"
                )} 
              />
            ))}
          </div>
        )}
        
        {showActions && (
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-20" />
          </div>
        )}
      </div>
    </div>
  );
}

interface ListSkeletonProps {
  className?: string;
  items?: number;
  showAvatar?: boolean;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showDescription?: boolean;
}

export function ListSkeleton({
  className,
  items = 3,
  showAvatar = true,
  showTitle = true,
  showSubtitle = true,
  showDescription = true
}: ListSkeletonProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex gap-4 items-start">
          {showAvatar && (
            <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
          )}
          
          <div className="flex-1 space-y-2">
            {showTitle && (
              <Skeleton className="h-5 w-3/4" />
            )}
            
            {showSubtitle && (
              <Skeleton className="h-4 w-1/2" />
            )}
            
            {showDescription && (
              <div className="space-y-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

interface TableSkeletonProps {
  className?: string;
  rows?: number;
  columns?: number;
  showHeader?: boolean;
}

export function TableSkeleton({
  className,
  rows = 5,
  columns = 4,
  showHeader = true
}: TableSkeletonProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {showHeader && (
        <div className="flex gap-4 pb-2 border-b border-border">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton key={i} className="h-5 flex-1" />
          ))}
        </div>
      )}
      
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton 
                key={colIndex} 
                className={cn(
                  "h-4",
                  colIndex === 0 ? "w-1/3" : "flex-1"
                )} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface GridSkeletonProps {
  className?: string;
  items?: number;
  columns?: number;
  gap?: number;
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

export function GridSkeleton({
  className,
  items = 6,
  columns = 3,
  gap = 4,
  showImage = true,
  showTitle = true,
  showDescription = true
}: GridSkeletonProps) {
  return (
    <div 
      className={cn('grid gap-4', className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: `${gap * 0.25}rem`
      }}
    >
      {Array.from({ length: items }).map((_, i) => (
        <CardSkeleton
          key={i}
          showImage={showImage}
          showTitle={showTitle}
          showDescription={showDescription}
          showActions={false}
          lines={2}
        />
      ))}
    </div>
  );
}

interface HeroSkeletonProps {
  className?: string;
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  showActions?: boolean;
}

export function HeroSkeleton({
  className,
  showImage = true,
  showTitle = true,
  showDescription = true,
  showActions = true
}: HeroSkeletonProps) {
  return (
    <div className={cn('flex flex-col lg:flex-row gap-8 items-center', className)}>
      {showImage && (
        <div className="lg:w-1/2">
          <Skeleton className="w-full h-96 rounded-2xl" />
        </div>
      )}
      
      <div className="lg:w-1/2 space-y-6">
        {showTitle && (
          <div className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-8 w-3/4" />
          </div>
        )}
        
        {showDescription && (
          <div className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        )}
        
        {showActions && (
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-28" />
          </div>
        )}
      </div>
    </div>
  );
}

// Shimmer effect component
export function Shimmer({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

// Custom shimmer animation
export const shimmerAnimation = `
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;