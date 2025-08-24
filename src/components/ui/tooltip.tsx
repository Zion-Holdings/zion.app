import React from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  children: React.ReactNode;
  className?: string;
}

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}

interface TooltipProviderProps {
  children: React.ReactNode;
}

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, className }) => {
  return <div className={cn("relative", className)}>{children}</div>;
};

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children, asChild, className }) => {
  if (asChild) {
    return <>{children}</>;
  }
  return <div className={cn("cursor-pointer", className)}>{children}</div>;
};

export const TooltipContent: React.FC<TooltipContentProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-md",
      "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
      "pointer-events-none",
      className
    )}>
      {children}
    </div>
  );
};