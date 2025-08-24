import React from 'react';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  hover?: boolean;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
}

export function EnhancedCard({ 
  children, 
  className, 
  variant = 'default',
  hover = true,
  onClick,
  as: Component = 'div',
  href
}: EnhancedCardProps) {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-zion-blue-dark border border-zion-blue-light',
    elevated: 'bg-zion-blue-dark shadow-lg shadow-zion-purple/10',
    outlined: 'bg-transparent border-2 border-zion-cyan/30',
    gradient: 'bg-gradient-to-br from-zion-blue-dark to-zion-blue border border-zion-blue-light'
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:shadow-zion-purple/20 hover:transform hover:scale-[1.02]' : '';
  
  const interactiveClasses = onClick || href ? 'cursor-pointer' : '';

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    hoverClasses,
    interactiveClasses,
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Component className={classes} onClick={onClick}>
      {children}
    </Component>
  );
}

// Enhanced Card Header component
export function EnhancedCardHeader({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn('p-6 pb-0', className)}>
      {children}
    </div>
  );
}

// Enhanced Card Content component
export function EnhancedCardContent({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}

// Enhanced Card Footer component
export function EnhancedCardFooter({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
}