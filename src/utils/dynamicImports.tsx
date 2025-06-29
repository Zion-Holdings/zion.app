import React from 'react';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { logError } from './productionLogger';

// Loading component for dynamic imports
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary for failed dynamic imports
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="flex items-center justify-center p-8 text-red-600">
    <p>Failed to load component: {error.message}</p>
  </div>
);

// Enhanced dynamic import with error handling
export function createDynamicImport<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: {
    loading?: ComponentType;
    ssr?: boolean;
    errorFallback?: ComponentType<{ error: Error }>;
  } = {}
) {
  return dynamic(importFn, {
    loading: options.loading || LoadingSpinner,
    ssr: options.ssr ?? true,
    onError: (error) => {
      logError('Dynamic import failed:', { data: error });
      if (options.errorFallback) {
        return options.errorFallback({ error });
      }
      return ErrorFallback({ error });
    }
  });
}

// Pre-optimized dynamic imports for heavy components
export const DynamicComponents = {
  // Chart components (heavy charting library)
  Chart: createDynamicImport(
    () => import('@/components/ui/chart'),
    { ssr: false }
  ),
  
  // Code editor (heavy monaco editor)
  CodeEditor: createDynamicImport(
    () => import('@/components/ui/code-editor'),
    { ssr: false }
  ),
  
  // 3D model viewer (heavy three.js)
  ModelViewer: createDynamicImport(
    () => import('@/components/ui/model-viewer'),
    { ssr: false }
  ),
  
  // Video player (heavy video processing)
  VideoPlayer: createDynamicImport(
    () => import('@/components/ui/video-player'),
    { ssr: false }
  ),
  
  // Rich text editor (heavy editing features)
  RichTextEditor: createDynamicImport(
    () => import('@/components/ui/rich-text-editor'),
    { ssr: false }
  ),
  
  // PDF viewer (heavy pdf.js)
  PDFViewer: createDynamicImport(
    () => import('@/components/ui/pdf-viewer'),
    { ssr: false }
  ),
  
  // Calendar component (heavy date utilities)
  Calendar: createDynamicImport(
    () => import('@/components/ui/calendar'),
    { ssr: false }
  ),
  
  // Data table with virtual scrolling (heavy for large datasets)
  DataTable: createDynamicImport(
    () => import('@/components/ui/data-table'),
    { ssr: true }
  ),
  
  // Bundle analyzer (dev tool)
  BundleAnalyzer: createDynamicImport(
    () => import('@/components/ui/bundle-analyzer'),
    { ssr: false }
  ),
  
  // Performance monitor (dev tool)
  PerformanceMonitor: createDynamicImport(
    () => import('@/components/ui/performance-monitor'),
    { ssr: false }
  )
};

// Route-based code splitting helpers
export const DynamicPages = {
  // Admin dashboard (heavy admin features)
  AdminDashboard: createDynamicImport(
    () => import('@/pages/admin'),
    { ssr: true }
  ),
  
  // Marketplace (heavy product data)
  Marketplace: createDynamicImport(
    () => import('@/pages/marketplace'),
    { ssr: true }
  ),
  
  // Talent dashboard (heavy talent features)
  TalentDashboard: createDynamicImport(
    () => import('@/pages/talent-dashboard'),
    { ssr: true }
  ),
  
  // Creator dashboard (heavy creator tools)
  CreatorDashboard: createDynamicImport(
    () => import('@/pages/creator-dashboard'),
    { ssr: true }
  )
};

// Utility for preloading components
export function preloadComponent(component: ComponentType) {
  if (typeof window !== 'undefined' && 'preload' in component) {
    (component as any).preload();
  }
}

// Bundle size tracker
export function trackBundleUsage(componentName: string) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log(`[Bundle] Loading component: ${componentName}`);
  }
} 