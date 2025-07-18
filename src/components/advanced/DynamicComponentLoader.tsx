'use client'

import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { Loader2, AlertTriangle, WifiOff, RefreshCw } from '@/components/ui/icons';
import type { ComponentType } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import { logErrorToProduction } from '@/utils/productionLogger'
import { Button } from '@/components/ui/button';


interface LoadingState {
  isLoading: boolean
  error: Error | null
  retryCount: number
  isOnline: boolean
}

interface DynamicLoaderProps {
  importFn: () => Promise<{ default: ComponentType<unknown> }>
  fallback?: React.ReactNode
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>
  loadingComponent?: React.ComponentType
  maxRetries?: number
  prefetch?: boolean
  className?: string
  children?: React.ReactNode
  [key: string]: unknown
}

// Enhanced Loading Component
const EnhancedLoading: React.FC<{ 
  progress?: number
  message?: string
  showProgress?: boolean
}> = ({ 
  progress = 0, 
  message = 'Loading component...', 
  showProgress = true 
}) => (
  <Card className="w-full max-w-md mx-auto">
    <CardContent className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          {showProgress && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">{message}</p>
          {showProgress && (
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round(progress)}% loaded
            </p>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)

// Enhanced Error Component
const EnhancedError: React.FC<{
  error: Error
  retry: () => void
  isOnline: boolean
  retryCount: number
  maxRetries: number
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (
  <Card className="w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10">
    <CardContent className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20">
          {isOnline ? (
            <AlertTriangle className="h-6 w-6 text-red-600" />
          ) : (
            <WifiOff className="h-6 w-6 text-red-600" />
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-red-900 dark:text-red-100">
            {isOnline ? 'Loading Failed' : 'Offline'}
          </h3>
          <p className="text-sm text-red-700 dark:text-red-200 mt-1">
            {isOnline 
              ? error.message || 'Failed to load component'
              : 'Please check your internet connection'
            }
          </p>
          {retryCount > 0 && (
            <p className="text-xs text-red-600 dark:text-red-300 mt-2">
              Retry {retryCount}/{maxRetries}
            </p>
          )}
        </div>
        {retryCount < maxRetries && (
          <Button 
            onClick={retry} 
            variant="outline" 
            size="sm"
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
)

// Network Status Hook
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine)
    
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    
    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])

  return isOnline
}

// Advanced Dynamic Component Loader
export const DynamicComponentLoader: React.FC<DynamicLoaderProps> = ({
  importFn,
  fallback,
  errorFallback,
  loadingComponent,
  maxRetries = 3,
  prefetch = false,
  className,
  children,
  ...props
}) => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    error: null,
    retryCount: 0,
    isOnline: true
  })
  const [progress, setProgress] = useState(0)
  // Use ComponentType<Record<string, unknown>> here to allow spreading arbitrary props and children to dynamic components
  const [DynamicComponent, setDynamicComponent] = useState<ComponentType<Record<string, unknown>> | null>(null)
  const isOnline = useNetworkStatus()

  // Simulate loading progress for better UX
  useEffect(() => {
    if (loadingState.isLoading && !loadingState.error) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev
          return prev + Math.random() * 10
        })
      }, 100)

      return () => clearInterval(interval)
    }
    
    return () => {} // Return empty cleanup function for other paths
  }, [loadingState.isLoading, loadingState.error])

  // Load component
  const loadComponent = useCallback(async () => {
    try {
      setLoadingState(prev => ({ ...prev, isLoading: true, error: null, isOnline }))
      setProgress(0)

      const component = await importFn()
      setDynamicComponent(() => component.default)
      setProgress(100)
      
      setTimeout(() => {
        setLoadingState(prev => ({ ...prev, isLoading: false }))
      }, 300) // Small delay for smoother transition

    } catch {
      logErrorToProduction('Dynamic component loading failed:', { data: _'Error occurred' })
      setLoadingState(prev => ({
        ...prev,
        isLoading: false,
        error: _error as Error,
        retryCount: prev.retryCount + 1,
        isOnline
      }))
    }
  }, [importFn, isOnline, setDynamicComponent, setLoadingState, setProgress]);

  // Retry functionality
  const retry = () => {
    if (loadingState.retryCount < maxRetries) {
      loadComponent()
    }
  }

  // Prefetch on hover/focus
  useEffect(() => {
    if (prefetch) {
      const prefetchTimer = setTimeout(() => {
        loadComponent()
      }, 100)

      return () => clearTimeout(prefetchTimer)
    } else {
      loadComponent()
      return () => {} // Return empty cleanup function
    }
  }, [loadComponent, prefetch])

  // Update online status
  useEffect(() => {
    setLoadingState(prev => ({ ...prev, isOnline }))
  }, [isOnline])

  // Loading state
  if (loadingState.isLoading) {
    if (loadingComponent) {
      return React.createElement(loadingComponent)
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("flex items-center justify-center p-8", className)}
      >
        <EnhancedLoading 
          progress={progress} 
          message="Loading component..."
          showProgress={true}
        />
      </motion.div>
    )
  }

  // Error state
  if (loadingState.error) {
    if (errorFallback) {
      return React.createElement(errorFallback, { 
        error: loadingState.error, 
        retry 
      })
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("flex items-center justify-center p-8", className)}
      >
        <EnhancedError
          error={loadingState.error}
          retry={retry}
          isOnline={loadingState.isOnline}
          retryCount={loadingState.retryCount}
          maxRetries={maxRetries}
        />
      </motion.div>
    )
  }

  // Success state
  if (DynamicComponent) {
    return (
      <Suspense fallback={fallback || <EnhancedLoading />}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={className}
          >
            <DynamicComponent {...props}>
              {children}
            </DynamicComponent>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    )
  }

  return null
}

DynamicComponentLoader.displayName = "DynamicComponentLoader";

// HOC for creating dynamic components easily
export const createDynamicComponent = <T extends ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  options?: Omit<DynamicLoaderProps, 'importFn' | 'children'>
) => {
  const DynamicComponent = (props: React.ComponentProps<T> & { children?: React.ReactNode }) => (
    <DynamicComponentLoader
      importFn={importFn}
      {...(options || {})}
      {...(typeof props === 'object' && props !== null ? props : {})}
    />
  );
  
  DynamicComponent.displayName = 'DynamicComponent';
  return DynamicComponent;
}

// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed

// export const DynamicChartComponent = createDynamicComponent(
//   () => import('recharts').then(module => ({ default: module.LineChart })),
//   {
//     loadingComponent: () => (
//       <div className="w-full h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading chart...</span>
//       </div>
//     ),
//     prefetch: true
//   }
// )

// export const DynamicThreeComponent = createDynamicComponent(
//   () => import('three').then(module => ({ default: module.WebGLRenderer })),
//   {
//     loadingComponent: () => (
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading 3D renderer...</span>
//       </div>
//     )
//   }
// )

export default DynamicComponentLoader 