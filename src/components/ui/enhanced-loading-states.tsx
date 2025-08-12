import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertTriangle, RefreshCw, Wifi, WifiOff, Clock, Zap } from 'lucide-react';







import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Enhanced loading spinner with different variants
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
  showText?: boolean;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className,
  showText = false,
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  const variantClasses = {
    default: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Loader2 className={cn('animate-spin', sizeClasses[size], variantClasses[variant])} />
      {showText && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
};

// Progressive loading component
interface ProgressiveLoadingProps {
  steps: Array<{ id: string; label: string; duration?: number }>;
  currentStep?: number;
  showProgress?: boolean;
  onComplete?: () => void;
}

export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({
  steps,
  currentStep = 0,
  showProgress = true,
  onComplete
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const progress = ((activeStep + 1) / steps.length) * 100;

  useEffect(() => {
    if (currentStep !== undefined) {
      setActiveStep(currentStep);
    }
  }, [currentStep]);

  useEffect(() => {
    if (activeStep === steps.length - 1 && onComplete) {
      setTimeout(onComplete, 500);
    }
  }, [activeStep, steps.length, onComplete]);

  return (
    <div className="space-y-4">
      {showProgress && (
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      <div className="space-y-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={cn(
              'flex items-center gap-3 p-2 rounded-md',
              index === activeStep ? 'bg-primary/10' : 'opacity-50'
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: index <= activeStep ? 1 : 0.5, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {index < activeStep ? (
              <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            ) : index === activeStep ? (
              <LoadingSpinner size="sm" variant="primary" />
            ) : (
              <div className="h-4 w-4 rounded-full border-2 border-muted" />
            )}
            <span className="text-sm font-medium">{step.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Enhanced skeleton loader
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  animation?: 'pulse' | 'wave' | 'none';
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1
}) => {
  const baseClasses = 'bg-muted rounded';
  
  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'h-12 w-12 rounded-full',
    rectangular: 'h-6 w-full',
    card: 'h-48 w-full'
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-bounce',
    none: ''
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              variantClasses.text,
              animationClasses[animation],
              i === lines - 1 ? 'w-3/4' : 'w-full',
              className
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
    />
  );
};

// Enhanced error state component
interface ErrorStateProps {
  error?: Error | string | null;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'network' | 'generic' | 'timeout' | 'permission';
  showRetry?: boolean;
  retryCount?: number;
  maxRetries?: number;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  title,
  description,
  action,
  secondaryAction,
  variant = 'generic',
  showRetry = true,
  retryCount = 0,
  maxRetries = 3,
  onRetry,
  className
}) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
    
    return undefined;
  }, []);

  const getErrorConfig = () => {
    switch (variant) {
      case 'network':
        return {
          icon: isOnline ? Wifi : WifiOff,
          title: title || (isOnline ? 'Connection Error' : 'No Internet Connection'),
          description: description || (isOnline 
            ? 'Unable to connect to our servers. Please check your connection.'
            : 'You appear to be offline. Please check your internet connection.'
          ),
          color: 'text-orange-500'
        };
      case 'timeout':
        return {
          icon: Clock,
          title: title || 'Request Timeout',
          description: description || 'The request took too long to complete. Please try again.',
          color: 'text-yellow-500'
        };
      case 'permission':
        return {
          icon: AlertTriangle,
          title: title || 'Access Denied',
          description: description || 'You don\'t have permission to access this resource.',
          color: 'text-red-500'
        };
      default:
        return {
          icon: AlertTriangle,
          title: title || 'Something went wrong',
          description: description || 'An unexpected error occurred. Please try again.',
          color: 'text-red-500'
        };
    }
  };

  const config = getErrorConfig();
  const Icon = config.icon;
  const canRetry = showRetry && onRetry && retryCount < maxRetries;

  return (
    <Card className={cn('border-destructive/20', className)}>
      <CardContent className="p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={cn('mx-auto mb-4 h-12 w-12', config.color)} />
          <h3 className="text-lg font-semibold mb-2">{config.title}</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {config.description}
          </p>

          {error && process.env.NODE_ENV === 'development' && (
            <details className="mb-4 text-left">
              <summary className="text-sm text-muted-foreground cursor-pointer">
                Error Details (Development)
              </summary>
              <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
                {typeof error === 'string' ? error : error.message}
              </pre>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            {canRetry && (
              <Button onClick={onRetry} variant="default">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again {retryCount > 0 && `(${retryCount}/${maxRetries})`}
              </Button>
            )}
            
            {action && (
              <Button onClick={action.onClick} variant={canRetry ? "outline" : "default"}>
                {action.label}
              </Button>
            )}
            
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant="ghost">
                {secondaryAction.label}
              </Button>
            )}
          </div>

          {!isOnline && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <WifiOff className="h-4 w-4" />
              <span>Offline</span>
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  );
};

// Loading state for lists/grids
interface LoadingGridProps {
  count?: number;
  columns?: number;
  variant?: 'card' | 'list' | 'table';
  className?: string;
}

export const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8,
  columns = 4,
  variant = 'card',
  className
}) => {
  const gridClasses = {
    card: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-6`,
    list: 'space-y-4',
    table: 'space-y-2'
  };

  const itemClasses = {
    card: 'p-6 space-y-4',
    list: 'p-4 space-y-3',
    table: 'p-3 space-y-2'
  };

  return (
    <div className={cn(gridClasses[variant], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardContent className={itemClasses[variant]}>
            {variant === 'card' && (
              <>
                <Skeleton variant="rectangular" className="h-32" />
                <div className="space-y-2">
                  <Skeleton variant="text" className="h-6 w-3/4" />
                  <Skeleton variant="text" lines={2} />
                  <div className="flex gap-2">
                    <Skeleton variant="text" className="h-4 w-16" />
                    <Skeleton variant="text" className="h-4 w-20" />
                  </div>
                </div>
              </>
            )}
            
            {variant === 'list' && (
              <div className="flex gap-4">
                <Skeleton variant="circular" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" className="h-5 w-1/2" />
                  <Skeleton variant="text" lines={2} />
                </div>
              </div>
            )}
            
            {variant === 'table' && (
              <div className="flex items-center gap-4">
                <Skeleton variant="text" className="h-4 w-1/4" />
                <Skeleton variant="text" className="h-4 w-1/3" />
                <Skeleton variant="text" className="h-4 w-1/6" />
                <Skeleton variant="text" className="h-4 w-1/4" />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Performance indicator
interface PerformanceIndicatorProps {
  isLoading?: boolean;
  loadTime?: number;
  itemCount?: number;
  className?: string;
}

export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({
  isLoading = false,
  loadTime,
  itemCount,
  className
}) => {
  const getPerformanceColor = (time: number) => {
    if (time < 100) return 'text-green-500';
    if (time < 300) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (isLoading) {
    return (
      <Badge variant="outline" className={cn('text-xs', className)}>
        <LoadingSpinner size="sm" />
        <span className="ml-1">Loading...</span>
      </Badge>
    );
  }

  return (
    <div className={cn('flex items-center gap-2 text-xs text-muted-foreground', className)}>
      {loadTime && (
        <Badge variant="outline" className={getPerformanceColor(loadTime)}>
          <Zap className="h-3 w-3 mr-1" />
          {loadTime}ms
        </Badge>
      )}
      {itemCount && (
        <span>{itemCount} items loaded</span>
      )}
    </div>
  );
}; 