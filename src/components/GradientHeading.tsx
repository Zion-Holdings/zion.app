import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  return (
<<<<<<< HEAD
    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent ${className}`}>
=======
    <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
>>>>>>> f3114b5ec6e0762a89ac302f1e1c77234f5ec6df
      {children}
    </h2>
  );
}