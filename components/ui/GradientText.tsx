import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  animate?: boolean;
}

export default function GradientText({ 
  children, 
  className = '', 
  gradient = 'from-blue-400 via-purple-500 to-pink-500',
  animate = false 
}: GradientTextProps) {
  return (
    <span 
      className={`
        bg-gradient-to-r ${gradient} 
        bg-clip-text text-transparent
        ${animate ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );
}