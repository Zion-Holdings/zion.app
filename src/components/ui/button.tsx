import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  size = 'md', 
  asChild = false,
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    default: 'bg-zion-blue text-white hover:bg-zion-blue-dark',
    outline: 'border border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white',
    ghost: 'text-zion-blue hover:bg-zion-blue/10'
  };
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: classes,
      ...props
    });
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};