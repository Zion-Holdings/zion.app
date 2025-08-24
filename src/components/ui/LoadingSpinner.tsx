import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'default' | 'pulse' | 'dots';
}

export function LoadingSpinner({ 
  size = 'md', 
  className, 
  text,
  variant = 'default' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={cn(
            'animate-pulse rounded-full bg-zion-cyan',
            sizeClasses[size]
          )} />
        );
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className={cn(
              'animate-bounce rounded-full bg-zion-cyan',
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
            )} style={{ animationDelay: '0ms' }} />
            <div className={cn(
              'animate-bounce rounded-full bg-zion-purple',
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
            )} style={{ animationDelay: '150ms' }} />
            <div className={cn(
              'animate-bounce rounded-full bg-zion-cyan-light',
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
            )} style={{ animationDelay: '300ms' }} />
          </div>
        );
      default:
        return (
          <div className={cn(
            'animate-spin rounded-full border-2 border-zion-blue-light border-t-zion-cyan',
            sizeClasses[size]
          )} />
        );
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div className="relative">
        {renderSpinner()}
      </div>
      {text && (
        <p className="mt-3 text-sm text-zion-slate-light text-center animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}