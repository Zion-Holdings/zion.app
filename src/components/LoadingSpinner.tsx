import React from 'react';
import { Loader2, Zap, Brain, Shield, Cpu } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'bounce' | 'spin' | 'quantum';
  text?: string;
  showIcon?: boolean;
  iconType?: 'default' | 'tech' | 'ai' | 'security' | 'cpu';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  showIcon = true,
  iconType = 'default',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const getIcon = () => {
    switch (iconType) {
      case 'tech':
        return <Zap className="w-full h-full text-cyan-400" />;
      case 'ai':
        return <Brain className="w-full h-full text-purple-400" />;
      case 'security':
        return <Shield className="w-full h-full text-green-400" />;
      case 'cpu':
        return <Cpu className="w-full h-full text-blue-400" />;
      default:
        return <Loader2 className="w-full h-full text-cyan-400" />;
    }
  };

  const getSpinnerVariant = () => {
    switch (variant) {
      case 'pulse':
        return 'animate-pulse';
      case 'bounce':
        return 'animate-bounce';
      case 'spin':
        return 'animate-spin';
      case 'quantum':
        return 'animate-spin';
      default:
        return 'animate-spin';
    }
  };

  const getQuantumSpinner = () => (
    <div className="relative">
      {/* Outer ring */}
      <div className={`${sizeClasses[size]} border-4 border-cyan-500/20 rounded-full`}></div>
      
      {/* Inner spinning ring */}
      <div className={`${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full absolute inset-0 animate-spin`}></div>
      
      {/* Quantum particles */}
      <div className={`${sizeClasses[size]} absolute inset-0`}>
        <div className="w-2 h-2 bg-purple-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-ping"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 bg-green-400 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Spinner */}
      <div className="relative mb-4">
        {variant === 'quantum' ? (
          getQuantumSpinner()
        ) : (
          <div className={`${sizeClasses[size]} ${getSpinnerVariant()}`}>
            {showIcon && getIcon()}
          </div>
        )}
      </div>

      {/* Loading Text */}
      {text && (
        <div className="text-center">
          <p className={`${textSizes[size]} text-gray-300 font-medium`}>
            {text}
          </p>
          
          {/* Loading dots animation */}
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      )}

      {/* Accessibility */}
      <div className="sr-only" role="status" aria-live="polite">
        {text}
      </div>
    </div>
  );
};

// Full screen loading component
export const FullScreenLoader: React.FC<{
  text?: string;
  variant?: LoadingSpinnerProps['variant'];
  iconType?: LoadingSpinnerProps['iconType'];
}> = ({ text = 'Loading Zion Tech Group...', variant = 'quantum', iconType = 'tech' }) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner
        size="xl"
        variant={variant}
        text={text}
        iconType={iconType}
        className="mb-6"
      />
      
      {/* Additional loading info */}
      <div className="text-gray-400 text-sm space-y-2">
        <p>Preparing your experience</p>
        <p>Loading cutting-edge technology solutions</p>
      </div>
    </div>
  </div>
);

// Inline loading component
export const InlineLoader: React.FC<{
  size?: LoadingSpinnerProps['size'];
  text?: string;
  variant?: LoadingSpinnerProps['variant'];
}> = ({ size = 'sm', text, variant = 'default' }) => (
  <div className="flex items-center gap-2">
    <LoadingSpinner size={size} variant={variant} showIcon={true} />
    {text && <span className="text-sm text-gray-400">{text}</span>}
  </div>
);

// Skeleton loading component
export const SkeletonLoader: React.FC<{
  className?: string;
  lines?: number;
}> = ({ className = '', lines = 3 }) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-gray-700 rounded mb-2 ${
          index === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      ></div>
    ))}
  </div>
);

export default LoadingSpinner;