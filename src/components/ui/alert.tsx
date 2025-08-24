import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive';
  className?: string;
}

export function Alert({ children, variant = 'default', className = '' }: AlertProps) {
  const baseClasses = 'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7';
  
  const variants = {
    default: 'bg-background text-foreground',
    destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function AlertDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-sm [&_p]:leading-relaxed ${className}`}>
      {children}
    </div>
  );
}