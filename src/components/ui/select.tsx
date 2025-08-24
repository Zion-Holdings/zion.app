import React from 'react';

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Select({ children, className = '', value, onValueChange }: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function SelectTrigger({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`
        flex h-10 w-full items-center justify-between rounded-md border 
        border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm 
        text-white placeholder:text-zion-slate-light/50
        focus:outline-none focus:ring-2 focus:ring-zion-cyan 
        focus:border-transparent transition-colors cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return (
    <span className="text-zion-slate-light">
      {placeholder || 'Select an option'}
    </span>
  );
}

export function SelectContent({ children, className = '' }: SelectProps) {
  return (
    <div className={`
      absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
      border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
      shadow-lg ${className}
    `}>
      {children}
    </div>
  );
}

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function SelectItem({ children, className = '', value, ...props }: SelectItemProps) {
  return (
    <div
      className={`
        relative flex w-full cursor-pointer select-none items-center 
        rounded-sm px-3 py-2 text-sm text-white outline-none 
        hover:bg-zion-blue/20 focus:bg-zion-blue/20 
        focus:text-white transition-colors
        ${className}
      `}
      data-value={value}
      {...props}
    >
      {children}
    </div>
  );
}