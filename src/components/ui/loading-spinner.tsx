import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'bounce' | 'wave';
  text?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const variantClasses = {
  default: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  wave: 'animate-pulse'
};

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div
        className={cn(
          'border-2 border-current border-t-transparent rounded-full',
          sizeClasses[size],
          variantClasses[variant],
          'text-zion-cyan'
        )}
      />
      {text && (
        <p className="mt-2 text-sm text-zion-slate-light text-center">
          {text}
        </p>
      )}
    </div>
  );
}

// Page loading component
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="text-center text-white">
        <LoadingSpinner size="xl" variant="white" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Loading Zion Tech Group...</h1>
        <p className="mt-2 text-blue-200">Please wait while we prepare your experience.</p>
      </div>
    </div>
  );
}

// Inline loading component
export function InlineLoader({ size = 'sm', variant = 'default' }: LoadingSpinnerProps) {
  return (
    <div className="inline-flex items-center">
      <LoadingSpinner size={size} variant={variant} className="mr-2" />
      <span className="text-sm text-gray-600">Loading...</span>
    </div>
  );
}