import React from 'react';
import { cn } from '@/lib/utils';

interface PageLoaderProps {
  text?: string;
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  text = "Loading...", 
  className 
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center min-h-screen",
      className
    )}>
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      <p className="mt-4 text-white text-lg font-medium">{text}</p>
    </div>
  );
};