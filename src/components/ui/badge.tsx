import React from 'react';

interface BadgeProps {
<<<<<<< HEAD
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
=======
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variantClasses = {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground'
>>>>>>> 181cfac2212680d9635253bde265173d9d08eca1
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
<<<<<<< HEAD
    <span className={classes} {...props}>
      {children}
    </span>
=======
    <div className={classes}>
      {children}
    </div>
>>>>>>> 181cfac2212680d9635253bde265173d9d08eca1
  );
}