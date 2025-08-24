import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <div className="relative">
        {/* Main Spinner */}
        <div className="w-16 h-16 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>
        
        {/* Orbiting Dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <div className="text-cyan-400 font-mono text-sm animate-pulse">
            Loading Zion Tech Group...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;