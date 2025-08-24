import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'card';
  className?: string;
}

export function AnimatedBackground({ variant = 'hero', className = '' }: AnimatedBackgroundProps) {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark animate-pulse"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-zion-cyan/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-zion-blue/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,113,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,113,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Neon lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zion-blue to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-zion-cyan/5 to-zion-blue/5 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-zion-cyan/40 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-zion-purple/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-1.5 h-1.5 bg-zion-blue/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`absolute inset-0 overflow-hidden rounded-lg ${className}`}>
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 via-zion-cyan/5 to-zion-blue/10 animate-pulse"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-zion-cyan/60 rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-zion-purple/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-zion-blue/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-zion-cyan/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    );
  }

  return null;
}

export function NeonBorder({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      {/* Neon border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-lg blur-sm opacity-50"></div>
      <div className="relative bg-zion-slate-dark/90 rounded-lg border border-zion-purple/30">
        {children}
      </div>
    </div>
  );
}

export function GlowingText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`${className} bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-pulse`}>
      {children}
    </span>
  );
}

export function FloatingElement({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  );
}