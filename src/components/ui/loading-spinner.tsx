import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'white';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variantClasses = {
    default: 'text-zion-cyan',
    primary: 'text-zion-blue',
    secondary: 'text-zion-purple',
    white: 'text-white'
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
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