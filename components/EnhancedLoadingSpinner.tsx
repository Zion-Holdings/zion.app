'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'error' | 'warning';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  autoComplete?: boolean;
  onComplete?: () => void;
  className?: string;
}

const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  showProgress = false,
  progress = 0,
  autoComplete = false,
  onComplete,
  className = '',
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const variantConfig = {
    default: {
      icon: Loader2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200',
    },
    success: {
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200',
    },
    error: {
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200',
    },
    warning: {
      icon: AlertCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-200',
    },
  };

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  useEffect(() => {
    if (showProgress && progress !== undefined) {
      setCurrentProgress(progress);
    }
  }, [progress, showProgress]);

  useEffect(() => {
    if (autoComplete && !isComplete) {
      const timer = setTimeout(() => {
        setCurrentProgress(100);
        setIsComplete(true);
        onComplete?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [autoComplete, isComplete, onComplete]);

  useEffect(() => {
    if (currentProgress >= 100 && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentProgress, isComplete, onComplete]);

  const renderSpinner = () => {
    if (isComplete && variant === 'success') {
      return (
        <div className={`${sizeClasses[size]} ${config.color} animate-pulse`}>
          <IconComponent className="w-full h-full" />
        </div>
      );
    }

    if (variant === 'default') {
      return (
        <div className={`${sizeClasses[size]} ${config.color} animate-spin`}>
          <IconComponent className="w-full h-full" />
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} ${config.color}`}>
        <IconComponent className="w-full h-full" />
      </div>
    );
  };

  const renderProgress = () => {
    if (!showProgress) return null;

    return (
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span>{Math.round(currentProgress)}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ease-out ${
              variant === 'success' ? 'bg-green-500' :
              variant === 'error' ? 'bg-red-500' :
              variant === 'warning' ? 'bg-yellow-500' :
              'bg-blue-500'
            }`}
            style={{ width: `${currentProgress}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 p-6 ${className}`}>
      <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-full p-4`}>
        {renderSpinner()}
      </div>
      
      {text && (
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
          {text}
        </p>
      )}
      
      {renderProgress()}
      
      {showProgress && currentProgress > 0 && currentProgress < 100 && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Processing...
        </div>
      )}
      
      {isComplete && (
        <div className="text-xs text-green-600 dark:text-green-400 font-medium">
          Complete!
        </div>
      )}
    </div>
  );
};

export default EnhancedLoadingSpinner;