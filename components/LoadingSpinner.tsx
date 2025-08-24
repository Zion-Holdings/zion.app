import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="relative">
        {/* Main Spinner */}
        <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin">
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin" />
        </div>
        
        {/* Orbiting Elements */}
        <div className="absolute inset-0 w-16 h-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <div className="text-white/80 font-medium mb-2">Loading Zion Tech Group</div>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;