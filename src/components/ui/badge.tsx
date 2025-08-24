import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-zion-purple text-white hover:bg-zion-purple-dark',
    secondary: 'bg-zion-blue text-zion-cyan hover:bg-zion-blue-dark',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-zion-purple text-zion-purple hover:bg-zion-purple/10'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}