import React, { Suspense, lazy } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Loading skeleton for different component types
const ComponentSkeleton = ({ type }: { type: 'chart' | 'form' | 'table' | 'card' }) => {
  switch (type) {
    case 'chart':
      return (
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-64 w-full" />
        </div>
      );
    case 'form':
      return (
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-10 w-32" />
        </div>
      );
    case 'table':
      return (
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      );
    case 'card':
    default:
      return (
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      );
  }
};

// Generic code split loader
export function CodeSplitLoader<T extends React.ComponentType<any>>({
  componentLoader,
  skeletonType = 'card',
  fallback,
  ...props
}: {
  componentLoader: () => Promise<{ default: T }>;
  skeletonType?: 'chart' | 'form' | 'table' | 'card';
  fallback?: React.ReactNode;
} & React.ComponentProps<T>) {
  const LazyComponent = lazy(componentLoader);

  return (
    <Suspense fallback={fallback || <ComponentSkeleton type={skeletonType} />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

// Pre-configured lazy loaders for common heavy components
export const LazyAnalyticsChart = (props: any) => (
  <CodeSplitLoader
    componentLoader={() => import('@/components/analytics/AnalyticsChart')}
    skeletonType="chart"
    {...props}
  />
);

export const LazyDataTable = (props: any) => (
  <CodeSplitLoader
    componentLoader={() => import('@/components/data/DataTable')}
    skeletonType="table"
    {...props}
  />
);

export const LazyRichTextEditor = (props: any) => (
  <CodeSplitLoader
    componentLoader={() => import('@/components/forms/RichTextEditor')}
    skeletonType="form"
    {...props}
  />
);

export const LazyCodeEditor = (props: any) => (
  <CodeSplitLoader
    componentLoader={() => import('@/components/forms/CodeEditor')}
    skeletonType="form"
    {...props}
  />
);

export const LazyVideoPlayer = (props: any) => (
  <CodeSplitLoader
    componentLoader={() => import('@/components/media/VideoPlayer')}
    skeletonType="card"
    {...props}
  />
);

export const LazyMap = (props: any) => (
  <CodeSplitLoader
    componentLoader={() => import('@/components/maps/InteractiveMap')}
    skeletonType="card"
    {...props}
  />
);

// Usage example:
// Instead of: import { AnalyticsChart } from '@/components/analytics/AnalyticsChart';
// Use: import { LazyAnalyticsChart as AnalyticsChart } from '@/components/CodeSplitLoader'; 