import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  asChild?: boolean;
}

export function Button({ 
  variant = 'default', 
  size = 'default', 
  asChild = false,
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    default: 'bg-zion-cyan text-white hover:bg-zion-cyan-dark',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white',
    secondary: 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30',
    ghost: 'text-zion-cyan hover:bg-zion-cyan/10',
    link: 'text-zion-cyan underline-offset-4 hover:underline'
  };
  
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    xl: 'h-12 rounded-md px-8 text-lg',
    icon: 'h-10 w-10'
  };
  
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
  
  if (asChild) {
    // For asChild, we need to clone the child and pass our props
    const child = React.Children.only(props.children) as React.ReactElement;
    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
      ...props
    });
  }
  
  return (
    <button className={classes} {...props} />
  );
}