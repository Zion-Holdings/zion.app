import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent ${className}`}>
      {children}
    </h2>
  );
}