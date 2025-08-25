import React from 'react';

interface FuturisticLoaderProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  variant?: 'matrix' | 'neural' | 'quantum' | 'cyber';
}

export const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
  size = 'medium',
  text = 'Loading...',
  variant = 'matrix'
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-xl'
  };

  const renderLoader = () => {
    switch (variant) {
      case 'matrix':
        return (
          <div className="relative">
            {/* Matrix Rain Effect */}
            <div className={`${sizeClasses[size]} relative overflow-hidden rounded-lg bg-black/20 border border-cyan-500/30`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-matrix-rain"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-cyan-400 font-mono text-xs animate-pulse">01</div>
              </div>
            </div>
            {/* Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          </div>
        );

      case 'neural':
        return (
          <div className="relative">
            {/* Neural Network Nodes */}
            <div className={`${sizeClasses[size]} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-1500"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full animate-pulse animation-delay-2000"></div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <line x1="50" y1="50" x2="50" y2="20" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" className="animate-neural-network" />
                <line x1="50" y1="50" x2="80" y2="30" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" className="animate-neural-network" style={{ animationDelay: '0.5s' }} />
                <line x1="50" y1="50" x2="20" y2="70" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" className="animate-neural-network" style={{ animationDelay: '1s' }} />
                <line x1="50" y1="50" x2="50" y2="80" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" className="animate-neural-network" style={{ animationDelay: '1.5s' }} />
              </svg>
            </div>
          </div>
        );

      case 'quantum':
        return (
          <div className="relative">
            {/* Quantum Particles */}
            <div className={`${sizeClasses[size]} relative`}>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse animation-delay-1000"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse animation-delay-2000"></div>
              
              {/* Central Particle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-quantum-float"></div>
              </div>
              
              {/* Orbiting Particles */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-cyber-spin"></div>
              <div className="absolute right-0 top-1/2 transform translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-cyber-spin" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full animate-cyber-spin" style={{ animationDelay: '1s' }}></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-cyber-spin" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        );

      case 'cyber':
        return (
          <div className="relative">
            {/* Cyber Grid */}
            <div className={`${sizeClasses[size]} relative bg-cyber-grid rounded-lg border border-cyan-500/30`}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
              
              {/* Scanning Line */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform -skew-x-12 -translate-x-full animate-cyberpunk-scan"></div>
              </div>
              
              {/* Central Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse-glow"></div>
              </div>
              
              {/* Corner Indicators */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-1500"></div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderLoader()}
      {text && (
        <div className={`text-center ${textSizes[size]}`}>
          <p className="text-cyan-400 font-medium animate-neon-pulse">{text}</p>
          <div className="flex space-x-1 mt-2 justify-center">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuturisticLoader;