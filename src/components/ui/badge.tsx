import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
  onClick?: () => void;
}

export function Badge({ children, variant = 'default', className, onClick }: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-zion-cyan text-white hover:bg-zion-cyan-dark',
    secondary: 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10'
  };

  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], clickableClasses, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}