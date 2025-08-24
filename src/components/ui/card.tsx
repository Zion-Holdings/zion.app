import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border border-zion-blue-light/30 bg-zion-blue-dark/50 p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={`space-y-1.5 pb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: CardProps) {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight text-white ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '' }: CardProps) {
  return (
    <p className={`text-sm text-zion-slate-light ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`pt-0 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }: CardProps) {
  return (
    <div className={`flex items-center pt-4 ${className}`}>
      {children}
    </div>
  );
}