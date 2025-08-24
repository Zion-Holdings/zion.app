import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onDismiss?: (id: string) => void;
}

const variantStyles = {
  default: 'bg-white border-gray-200 text-gray-900',
  success: 'bg-green-50 border-green-200 text-green-900',
  error: 'bg-red-50 border-red-200 text-red-900',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  info: 'bg-blue-50 border-blue-200 text-blue-900'
};

const variantIcons = {
  default: Info,
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info
};

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = 'default',
  duration = 5000,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = variantIcons[variant];

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onDismiss?.(id), 300);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, id, onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => onDismiss?.(id), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed top-4 right-4 z-50 max-w-sm w-full
        border rounded-lg shadow-lg p-4
        transform transition-all duration-300 ease-in-out
        ${variantStyles[variant]}
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="flex items-start space-x-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
          variant === 'success' ? 'text-green-500' :
          variant === 'error' ? 'text-red-500' :
          variant === 'warning' ? 'text-yellow-500' :
          variant === 'info' ? 'text-blue-500' :
          'text-gray-500'
        }`} />
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium">{title}</h4>
          {description && (
            <p className="mt-1 text-sm opacity-90">{description}</p>
          )}
        </div>
        
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 w-5 h-5 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};