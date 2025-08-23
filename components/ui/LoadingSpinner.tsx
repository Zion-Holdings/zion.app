import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  className?: string;
  'aria-label'?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  color = 'primary',
  customColor,
  text,
  className = '',
  'aria-label': ariaLabel
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white',
    custom: customColor ? `text-[${customColor}]` : 'text-cyan-500'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`animate-pulse rounded-full bg-current ${sizeClasses[size]} ${colorClasses[color]}`} />
        );
      
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`animate-bounce rounded-full bg-current ${colorClasses[color]}`}
                style={{
                  width: size === 'sm' ? '4px' : size === 'md' ? '6px' : size === 'lg' ? '8px' : '12px',
                  height: size === 'sm' ? '4px' : size === 'md' ? '6px' : size === 'lg' ? '8px' : '12px',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );
      
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`animate-pulse bg-current ${colorClasses[color]}`}
                style={{
                  width: size === 'sm' ? '2px' : size === 'md' ? '3px' : size === 'lg' ? '4px' : '6px',
                  height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );
      
      default:
        return (
          <svg
            className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );
    }
  };

  const defaultAriaLabel = ariaLabel || `Loading${text ? ` ${text}` : ''}`;

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-3 ${className}`}
      role="status"
      aria-label={defaultAriaLabel}
    >
      {renderSpinner()}
      {text && (
        <p className="text-sm text-gray-400 animate-pulse">
          {text}
        </p>
      )}
      <span className="sr-only">{defaultAriaLabel}</span>
    </div>
  );
};

// Skeleton loading component for content
export const LoadingSkeleton: React.FC<{
  className?: string;
  lines?: number;
  height?: string;
}> = ({ className = '', lines = 3, height = 'h-4' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse bg-gray-700 rounded ${height} ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

// Page loading component
export const PageLoader: React.FC<{
  text?: string;
  className?: string;
}> = ({ text = 'Loading page...', className = '' }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <LoadingSpinner
        size="xl"
        variant="default"
        color="primary"
        text={text}
      />
    </div>
  );
};

// Inline loading component
export const InlineLoader: React.FC<{
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ text, size = 'sm', className = '' }) => {
  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <LoadingSpinner size={size} variant="dots" color="primary" />
      {text && <span className="text-sm text-gray-400">{text}</span>}
    </div>
  );
};

// Button loading state
export const ButtonLoader: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}> = ({ size = 'sm', color = 'white', className = '' }) => {
  return (
    <LoadingSpinner
      size={size}
      variant="default"
      color={color}
      className={className}
    />
  );
};