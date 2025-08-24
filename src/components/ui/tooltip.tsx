import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
  delay?: number;
}

interface TooltipProviderProps {
  children: React.ReactNode;
}

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, content, className, delay = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap",
            "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
            "after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2",
            "after:border-4 after:border-transparent after:border-t-gray-900",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children, asChild = false }) => {
  return <>{children}</>;
};

export const TooltipContent: React.FC<TooltipContentProps> = ({ children, className }) => {
  return (
    <div className={cn("px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg", className)}>
      {children}
    </div>
  );
};