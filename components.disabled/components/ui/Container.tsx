import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Container({ 
  children, 
  className = '', 
  size = 'lg' 
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  };

  const classes = `mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}