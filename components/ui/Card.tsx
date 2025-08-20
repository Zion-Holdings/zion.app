import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md' 
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = 'bg-white rounded-xl border border-gray-200/50 shadow-sm';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-gray-300/50 transition-all duration-200' : '';
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}