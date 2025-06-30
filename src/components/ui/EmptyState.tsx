

import { Button } from './button';
import { Package, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
  icon?: React.ReactNode;
}

export function EmptyState({ 
  text = "No items available", 
  description,
  onRetry,
  showRetry = false,
  icon
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon || <Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {text}
      </h3>
      {description && (
        <p className="text-gray-400 mb-6 max-w-md">
          {description}
        </p>
      )}
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
} 