import React from 'react';

interface PageLoaderProps {
  text?: string;
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  text = "Loading...", 
  className = "" 
}) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-zion-cyan/30 border-t-zion-cyan rounded-full animate-spin mx-auto"></div>
        </div>
        <div className="text-zion-cyan text-lg font-medium">
          {text}
        </div>
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};