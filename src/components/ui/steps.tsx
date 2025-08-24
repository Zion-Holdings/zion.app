import React from 'react';

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

export function Steps({ children, className = '' }: StepsProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {children}
    </div>
  );
}

export function Step({ children, className = '' }: StepsProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {children}
    </div>
  );
}