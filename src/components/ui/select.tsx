import React from 'react';

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface SelectValueProps {
  placeholder?: string;
}

export function Select({ value, onValueChange, children }: SelectProps) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}

export function SelectTrigger({ children, className }: SelectTriggerProps) {
  return (
    <button className={`flex items-center justify-between w-full px-3 py-2 border border-zion-slate rounded-lg bg-background text-zion-slate ${className}`}>
      {children}
    </button>
  );
}

export function SelectContent({ children, className }: SelectContentProps) {
  return (
    <div className={`absolute top-full left-0 w-full mt-1 bg-background border border-zion-slate rounded-lg shadow-lg z-50 ${className}`}>
      {children}
    </div>
  );
}

export function SelectItem({ value, children, className }: SelectItemProps) {
  return (
    <div className={`px-3 py-2 hover:bg-zion-blue-light cursor-pointer ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: SelectValueProps) {
  return (
    <span className="text-zion-slate">
      {placeholder || 'Select an option'}
    </span>
  );
}