import React from 'react';

export function FuturisticBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(139,92,246,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(139,92,246,0.1)_50%)] bg-[length:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-zion-cyan rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-zion-purple/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-zion-cyan/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-zion-blue/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Animated Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0.5)" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            fill="none"
            className="animate-dash"
          />
        </svg>
      </div>
    </div>
  );
}