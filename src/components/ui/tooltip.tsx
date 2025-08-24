import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-zion-blue-dark rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {content}
      </div>
    </div>
  );
};

export const TooltipContent: React.FC<TooltipProps> = Tooltip;
export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
export const TooltipTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;